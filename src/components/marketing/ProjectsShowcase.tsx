"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Project {
  id: number;
  name: string;
  image: string;
  link: string;
}

const projects: Project[] = [
  { id: 1, name: "BGMI Event website", image: "/images/project1.jpg", link: "https://bectagonbgmi.vercel.app/" },
  { id: 2, name: "Edutech Website Talent Trek", image: "/images/project2.jpg", link: "https://www.talenttrekelearning.com/" },
  { id: 3, name: "Digital Marketing Campain", image: "/images/project3.jpg", link: "https://franchise-hub.vercel.app/" },
  { id: 4, name: "Edutech Startup geonixa", image: "/images/project4.jpg", link: "https://www.geonixa.com/" },
  { id: 5, name: "E-Commerce Website", image: "/images/project5.jpg", link: "https://www.myvevvion.com/" },
  { id: 6, name: "Social Media App", image: "/images/project6.jpg", link: "http://bec-forum.vercel.app/" },
  { id: 7, name: "GYM website", image: "/images/project7.jpg", link: "https://carefitnessstudio.vercel.app/" },
  { id: 8, name: "College Chat Application", image: "/images/project8.jpg", link: "https://becchat.vercel.app/" },
  { id: 9, name: "Training company", image: "/images/project9.jpg", link: "https://www.quriouzmankey.com/" },
];

const ProjectsShowcase = () => {
  return (
    <section className="py-24 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
           <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
     Projects We’re Proud Of <br />
      <span className="font-subheading italic text-blue-500">Innovations by Infonixa</span>
    </h2>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
          Take a look at some of the amazing web, app, and automation projects we've delivered for our clients.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div key={project.id} className="relative group rounded-lg overflow-hidden shadow-lg">
            <Image
              src={project.image}
              alt={project.name}
              width={500}
              height={300}
              className="object-cover w-full h-64 sm:h-56 md:h-60 lg:h-64 transition-transform duration-300 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center">
              <h3 className="text-lg font-semibold text-white mb-3">{project.name}</h3>
              <Link
                href={project.link}
                target="_blank"
                className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-black px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
              >
                Visit Website <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsShowcase;
