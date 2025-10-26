"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Zap, Cpu, Bot } from "lucide-react";
import Container from "../global/container";

const AutomationSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center w-full py-20 overflow-hidden bg-black text-white">
      <Container>
        {/* Heading */}
        <div className="text-center mb-12">
          <h4 className="text-2xl md:text-4xl lg:text-5xl font-normal leading-tight">
            Empower your business with{" "} <br />
            <span className="text-blue-500  font-subheading  font-normal italic">
              automation
            </span>
          </h4>
         
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 py-8 gap-10 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold leading-snug">
              Automate <span className="text-blue-500">everything</span> that
              slows you down
            </h2>

            <p className="text-gray-300">
              Our automation services empower your team to focus on what
              matters. From smart bots to workflow automation — we make your
              business run faster, smarter, and error-free.
            </p>

            {/* Icon Features */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Zap className="text-blue-500 h-6 w-6" />
                <p>Boost productivity with no manual effort</p>
              </div>
              <div className="flex items-center gap-3">
                <Cpu className="text-blue-500 h-6 w-6" />
                <p>Smart AI integrations and workflow design</p>
              </div>
              <div className="flex items-center gap-3">
                <Bot className="text-blue-500 h-6 w-6" />
                <p>Custom bots for support, marketing & operations</p>
              </div>
            </div>

            {/* Button */}
           
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-blue-500/30 rounded-2xl blur-2xl"></div>
            <Image
              src="/images/auto.jpg"
              alt="Automation services"
              width={600}
              height={400}
              className="relative rounded-2xl shadow-lg object-cover"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default AutomationSection;
