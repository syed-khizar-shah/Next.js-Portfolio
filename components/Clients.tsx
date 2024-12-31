"use client";

import React from "react";
import { testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import { FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";
import { TbBrandReactNative } from "react-icons/tb";
import { GiArtificialIntelligence } from "react-icons/gi";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        Kind words from
        <span className="text-purple"> satisfied clients</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            <div className="tech-stack-item">
              <SiMongodb className="w-12 h-12 text-green-500" />
              <span className="text-sm mt-2">MongoDB</span>
            </div>
            <div className="tech-stack-item">
              <SiExpress className="w-12 h-12 text-gray-600" />
              <span className="text-sm mt-2">Express.js</span>
            </div>
            <div className="tech-stack-item">
              <FaReact className="w-12 h-12 text-blue-400" />
              <span className="text-sm mt-2">React.js</span>
            </div>
            <div className="tech-stack-item">
              <FaNodeJs className="w-12 h-12 text-green-600" />
              <span className="text-sm mt-2">Node.js</span>
            </div>
            <div className="tech-stack-item">
              <SiNextdotjs className="w-12 h-12" />
              <span className="text-sm mt-2">Next.js</span>
            </div>
            <div className="tech-stack-item">
              <TbBrandReactNative className="w-12 h-12 text-blue-400" />
              <span className="text-sm mt-2">React Native</span>
            </div>
            <div className="tech-stack-item">
              <SiTypescript className="w-12 h-12 text-blue-600" />
              <span className="text-sm mt-2">TypeScript</span>
            </div>
            <div className="tech-stack-item">
              <SiJavascript className="w-12 h-12 text-yellow-400" />
              <span className="text-sm mt-2">JavaScript</span>
            </div>

            <div className="tech-stack-item">
              <GiArtificialIntelligence className="w-12 h-12 text-purple-500" />
              <span className="text-sm mt-2">Crew AI</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
