"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import projects from "@/data/projects";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

function Page() {
  return (
    <div className="container mx-auto px-4 md:px-[50px] xl:px-[150px] text-zinc-300 pt-28 pb-20">
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-white mb-3">AI & Software Projects</h1>
        <p className="text-zinc-400 text-sm max-w-xl">
          Practical machine learning solutions, research implementations, and intelligent applications built with Python and modern technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            className="rounded-2xl border-[.5px] border-zinc-700/80 bg-zinc-900/60 overflow-hidden flex flex-col justify-between hover:border-zinc-500 transition-all shadow-lg"
            key={project.id}
            style={{ backdropFilter: "blur(8px)" }}
          >
            <div>
              <div className="relative h-48 w-full overflow-hidden bg-zinc-800">
                <Image
                  src={project.src}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  width={400}
                  height={250}
                />
                <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-zinc-200 text-xs px-2.5 py-1 rounded-full border border-white/10 font-mono">
                  {project.category}
                </div>
              </div>

              <div className="p-6">
                <h2 className="text-xl font-bold text-white mb-2">{project.title}</h2>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.skills.frontend.map((s, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700"
                    >
                      {s.title}
                    </span>
                  ))}
                  {project.skills.backend.map((s, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700"
                    >
                      {s.title}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6 pt-0 flex items-center justify-between gap-3 border-t border-zinc-800/80 mt-2">
              {project.github && (
                <Link href={project.github} target="_blank" className="flex-1">
                  <Button variant="outline" size="sm" className="w-full gap-1 text-xs">
                    GitHub <ArrowUpRight className="w-3.5 h-3.5" />
                  </Button>
                </Link>
              )}
              {project.live && (
                <Link href={project.live} target="_blank" className="flex-1">
                  <Button variant="default" size="sm" className="w-full gap-1 text-xs">
                    View Project <ArrowUpRight className="w-3.5 h-3.5" />
                  </Button>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
