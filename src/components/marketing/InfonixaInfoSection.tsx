"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const InfonixaInfoSection = () => {
  return (
    <section className="relative w-full  text-white py-24 px-6 flex justify-center items-center">
      <div className="relative w-full max-w-3xl bg-black/80 border border-blue-500 rounded-3xl p-10 shadow-xl text-center flex flex-col items-center gap-8">
        
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading leading-snug">
          Infonixa – <span className="text-blue-500 italic font-subheading">Your AI-Powered Digital Growth Partner</span>
        </h1>

        {/* Paragraph */}
        <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed">
          Infonixa is a premier technology agency specializing in AI-powered web development, mobile app development, digital marketing, and workflow automation. At Infonixa, we combine cutting-edge technology with innovative strategies to help businesses streamline operations, enhance team collaboration, and maximize growth. From creating responsive websites to developing custom mobile apps, Infonixa delivers solutions tailored to meet every client’s unique needs. Our digital marketing services include SEO, social media management, content generation, and marketing automation, designed to expand your reach and improve ROI. By leveraging smart AI tools and automation, Infonixa enables businesses to save time, reduce manual effort, and scale efficiently.
        </p>

        

        {/* Background Glow */}
        <div className="absolute -z-10 -bottom-20 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-blue-500/20 blur-[100px] rounded-full" />
      </div>
    </section>
  );
};

export default InfonixaInfoSection;
