"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const InfonixaInfoSection = () => {
  return (
    <section className="relative w-full  text-white py-24 px-6">
        
      {/* Heading and Paragraph */}
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold font-heading mb-6">
          Infonixa – <span className="text-blue-500 italic font-subheading">Your AI-Powered Digital Growth Partner</span>
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto">
        Infonixa is a premier technology agency that specializes in AI-powered web development, mobile app development, digital marketing, and workflow automation. At Infonixa, we combine cutting-edge technology with innovative strategies to help businesses streamline operations, enhance team collaboration, and maximize growth. From creating responsive websites to developing custom mobile apps, Infonixa delivers solutions tailored to meet every client’s unique needs. Our digital marketing services at Infonixa include SEO, social media management, content generation, and marketing automation, designed to expand your reach and improve ROI. By leveraging smart AI tools and automation, Infonixa enables businesses to save time, reduce manual effort, and scale efficiently. With a focus on delivering measurable results, Infonixa has helped hundreds of organizations achieve digital transformation and stay ahead in the competitive marketplace.
        </p>
      </div>

      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-blue-500/20 blur-[100px] rounded-full" />
    </section>
  );
};

export default InfonixaInfoSection;
