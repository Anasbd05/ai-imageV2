"use client";
import axios from 'axios';
import Image from 'next/image';
import React,{useState} from 'react';

const Trying = () => {
    const [prompt,setPrompt] = useState('');
    const [image,setImage] = useState('');
    const [loading,setLoading] = useState(false);

    const handleImageGenerator = async () => {
        if(!prompt.trim()) return; // Prevents empty prompts

        setLoading(true);
        const options = {
            method: 'POST',
            url: 'https://ai-text-to-image-generator-api.p.rapidapi.com/realistic',
            headers: {
                'x-rapidapi-key': '83f8222f2dmshb4be60ecb7c0e90p19cd5ejsn41c5ab4b841d',
                'x-rapidapi-host': 'ai-text-to-image-generator-api.p.rapidapi.com',
                'Content-Type': 'application/json',
            },
            data: {inputs: prompt},
        };

        try {
            const res = await axios.request(options);
            setImage(res?.data.url);
        } catch(error) {
            console.error("Error generating image:",error);
        } finally {
            setLoading(false);
            setPrompt('');
        }
    };

    const handleDownload = () => {
        if(!image) return;
        window.open(image,'_blank');
    };

    return (
        <div className="py-6 sm:py-10 flex items-center flex-col">
            <h1 className="font-dm_sans text-4xl sm:text-5xl md:text-6xl tracking-tight bg-gradient-to-r font-bold from-primary to-accent bg-clip-text text-transparent">
                Experience It
            </h1>
            <p className="px-2 mt-4 mb-6 max-w-3xl leading-7 text-justify">
                See the power of AI image transformation in action. Upload a photo, and our AI will instantly enhance, redesign, or convert your space into a stunning gamer setup. No downloads, no hassle—just pure creativity at your fingertips. Try it now and watch the magic happen! 🚀
            </p>
            <div className="bg-gray-200 py-1 rounded-lg px-2 w-4/5 md:w-3/5 flex justify-between items-center">
                <input
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="bg-transparent w-full px-3 outline-none"
                    type="text"
                    placeholder="Prompt..."
                    disabled={loading}
                />
                <button
                    onClick={handleImageGenerator}
                    className='py-2 px-6 rounded-lg duration-300 hover:shadow-[2px_2px_#000] bg-accent font-dm_sans tracking-wide font-semibold'
                    disabled={loading}
                >
                    {loading ? 'Generating...' : 'Generate'}
                </button>
            </div>

            {loading && <span className="loading loading-bars loading-lg mt-4"></span>}

            {image && (
                <div className="my-5 flex flex-col gap-2 items-center">
                    <Image
                        alt="Generated AI Image"
                        width={1000}
                        height={560}
                        className="rounded-lg w-[350px] sm:w-[400px] md:w-[600px] lg:w-[1000px] mx-auto h-[560px]"
                        src={image}
                    />
                    <button onClick={handleDownload} className="bg-accent py-2 px-6 rounded-md font-dm_sans font-bold">
                        Download
                    </button>
                </div>
            )}
        </div>
    );
};

export default Trying;
