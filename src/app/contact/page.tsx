"use client";
import React from "react";
import ContactForm from "@/components/ContactForm";
import { config } from "@/data/config";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";

function Page() {
  return (
    <div className="container mx-auto px-4 md:px-[50px] xl:px-[150px] text-zinc-300 pt-28 pb-20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-white mb-3">Get in Touch</h1>
          <p className="text-zinc-400 text-sm max-w-md mx-auto">
            Have an internship opportunity, collaboration idea, or research query? Reach out directly.
          </p>
        </div>

        <Card className="bg-zinc-900/70 border border-zinc-700/80 backdrop-blur-md rounded-2xl shadow-xl">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl text-white">Send a Message</CardTitle>
            <CardDescription className="text-zinc-400 text-sm">
              Direct email:{" "}
              <a
                href={`mailto:${config.email}`}
                className="text-primary hover:underline font-mono"
              >
                {config.email}
              </a>
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>

        <div className="flex justify-center items-center gap-6 mt-8">
          <a
            href={config.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
          >
            <FaGithub className="w-4 h-4" /> GitHub
          </a>
          <a
            href={config.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-[#0077b5] transition-colors"
          >
            <FaLinkedin className="w-4 h-4" /> LinkedIn
          </a>
          <a
            href={`mailto:${config.email}`}
            className="flex items-center gap-2 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
          >
            <FaEnvelope className="w-4 h-4" /> {config.email}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Page;
