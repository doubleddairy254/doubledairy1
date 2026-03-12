"use client";

import { useState } from "react";
import { type Technology as TechType } from "@/lib/types";
import { MotionView } from "../ui/motion-view";
import { TechExplainerDialog } from "../tech-explainer-dialog";
import {
  Code,
  Smartphone,
  Cpu,
  Feather,
  GitBranch,
  Cloud,
} from "lucide-react";

const technologies: TechType[] = [
  { name: "React Native", icon: <Code /> },
  { name: "Expo", icon: <Smartphone /> },
  { name: "TypeScript", icon: <Cpu /> },
  { name: "Tailwind CSS", icon: <Feather /> },
  { name: "Git", icon: <GitBranch /> },
  { name: "Firebase", icon: <Cloud /> },
];

export function Technology() {
  const [selectedTech, setSelectedTech] = useState<TechType | null>(null);

  return (
    <section id="tech" className="py-20 sm:py-32">
      <div className="container mx-auto max-w-7xl px-4">
        <MotionView>
          <h2 className="font-headline text-center text-4xl font-bold tracking-tighter sm:text-5xl">
            Our Technology Stack
          </h2>
          <p className="mt-4 text-center text-lg text-muted-foreground sm:text-xl">
            We use modern, robust technologies to build high-quality applications.
          </p>
          <p className="mt-2 text-center text-sm text-accent">
            Click on a technology to learn more!
          </p>
        </MotionView>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-8 lg:grid-cols-6">
          {technologies.map((tech, index) => (
            <MotionView key={tech.name} delay={0.1 * index}>
              <button
                onClick={() => setSelectedTech(tech)}
                className="group flex h-full w-full flex-col items-center justify-center gap-4 rounded-xl border border-border/50 bg-card/50 p-6 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-accent hover:shadow-2xl hover:shadow-accent/10"
                aria-label={`Learn more about ${tech.name}`}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <div className="scale-150">{tech.icon}</div>
                </div>
                <h3 className="text-lg font-semibold">{tech.name}</h3>
              </button>
            </MotionView>
          ))}
        </div>
      </div>
      <TechExplainerDialog
        technology={selectedTech}
        isOpen={!!selectedTech}
        onClose={() => setSelectedTech(null)}
      />
    </section>
  );
}
