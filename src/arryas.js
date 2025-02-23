export const features = [
    {
        id: 1 ,
        header : "High-Quality AI Image Generation" ,
        body : "Create ultra-realistic and artistic images with state-of-the-art AI technology, perfect for any personal or professional project."
    },
    {
        id: 2 ,
        header : "Customizable Prompts for Precision" ,
        body : "Fine-tune your creations with highly detailed prompts, allowing you to shape the perfect visual exactly as you imagine."
    },
    {
        id: 3 ,
        header : "Lightning-Fast & Efficient" ,
        body : "Generate stunning, high-resolution images in seconds, saving you time while delivering professional-quality results."
    },
]

const Prices = [
    {
      name: "Free",
      id : 1 ,
      Monthlyprice: "$0/month",
      Yearlyprice: "$0/month",
      features: [
        "3 AI image transformations per month",
        "Basic image quality",
        "Watermarked results",
        "Limited customization options",
      ],
      buttonText: "Choose Plan",
    },
    {
      name: "Pro",
      id : 2 ,
      Monthlyprice: "$9.99/month",
      Yearlyprice: "$7.99/month",
      features: [
        "Unlimited AI transformations",
        "High-resolution images",
        "No watermarks",
        "Priority processing",
        "Advanced customization options",
      ],
      buttonText: "Choose Plan",
    },
    {
      name: "Ultimate",
      id : 3 ,
      Monthlyprice: "$19.99/month",
      Yearlyprice: "$16.99/month",
      features: [
        "All Pro features",
        "Exclusive AI models for ultra-realistic results",
        "Faster processing speeds",
        "Early access to new features",
        "Dedicated support",
      ],
      buttonText: "Choose Plan",
    },
  ];

  export default Prices;

export const faqs = [
    { 
        question: "How do I generate an AI image?", 
        answer: "To generate an AI image, simply enter a prompt describing the image you want, and click on 'Generate'. The AI will create the image based on your input." 
    },
    { 
        question: "What types of prompts can I use?", 
        answer: "You can use any type of descriptive prompt, such as 'a futuristic city skyline', 'a peaceful mountain view', or 'a gaming setup with RGB lights'." 
    },
    { 
        question: "Can I download the generated image?", 
        answer: "Yes, once the image is generated, you can download it by clicking on the 'Download' button below the image." 
    },
    { 
        question: "What if I don't like the generated image?", 
        answer: "You can generate a new image by updating the prompt and clicking the 'Generate' button again." 
    },
    { 
        question: "Are the images generated copyright-free?", 
        answer: "The images generated are AI-generated and are typically considered copyright-free, but it's important to check any specific terms of service or licensing agreements provided by the API used." 
    },
    { 
        question: "How long does it take to generate an image?", 
        answer: "The image generation usually takes a few seconds, depending on the complexity of the prompt and the speed of the API used." 
    },
    { 
        question: "Can I use the generated image for commercial purposes?", 
        answer: "Yes, as long as you are using the images within the terms of service of the AI image generation tool and the generated content does not violate any laws or policies." 
    }
];
