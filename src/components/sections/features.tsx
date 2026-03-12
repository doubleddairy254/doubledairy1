import { Zap, Rocket, Heart, TrendingUp } from "lucide-react";
import { type Feature } from "@/lib/types";
import { MotionView } from "../ui/motion-view";
import { Card, CardHeader, CardTitle, CardDescription } from "../ui/card";

const features: Feature[] = [
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: "Performance",
    description: "We build fast, responsive, and resource-efficient apps for a smooth user experience.",
  },
  {
    icon: <Rocket className="h-8 w-8 text-primary" />,
    title: "Innovation",
    description: "Leveraging the latest tech to create cutting-edge features and solutions.",
  },
  {
    icon: <Heart className="h-8 w-8 text-primary" />,
    title: "User-Focused Design",
    description: "Intuitive, accessible, and beautiful interfaces designed for real people.",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    title: "Continuous Improvement",
    description: "We iterate and update our apps to always deliver the best possible product.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 sm:py-32 bg-background/50">
      <div className="container mx-auto max-w-7xl px-4">
        <MotionView>
          <h2 className="font-headline text-center text-4xl font-bold tracking-tighter sm:text-5xl">
            Our Core Values
          </h2>
          <p className="mt-4 text-center text-lg text-muted-foreground sm:text-xl">
            What drives us to build great apps.
          </p>
        </MotionView>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <MotionView key={feature.title} delay={0.1 * index}>
              <Card className="relative overflow-hidden h-full transform-gpu border-white/10 bg-black/40 text-center backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] hover:border-primary/50 hover:bg-black/60 group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <CardHeader className="relative z-10">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 shadow-[0_0_15px_rgba(0,240,255,0.2)] transition-shadow duration-500 group-hover:shadow-[0_0_25px_rgba(0,240,255,0.5)]">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-2xl font-bold">{feature.title}</CardTitle>
                  <CardDescription className="mt-2 text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </MotionView>
          ))}
        </div>
      </div>
    </section>
  );
}
