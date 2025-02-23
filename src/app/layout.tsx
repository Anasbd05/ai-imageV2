import type {Metadata} from "next";
import {Outfit} from "next/font/google";
import "./globals.css";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer";


const outfit = Outfit({
  subsets: ['latin'],
})
export const metadata: Metadata = {
  title: "AI_ImageV2",
  description: "Generated pretty Image with ai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} bg-background antialiased`}
      >
        <Banner />
        {children}
        <Footer />
      </body>
    </html>
  );
}
