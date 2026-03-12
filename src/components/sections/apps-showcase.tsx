import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { type App } from "@/lib/types";
import { ArrowUpRight } from "lucide-react";
import { MotionView } from "../ui/motion-view";

const apps: App[] = [
  {
    id: "1",
    name: "EventTracker",
    description: "Track events and ceremonies around the globe.",
    icon: PlaceHolderImages.find(p => p.id === "app-icon-eventtracker")?.imageUrl || "",
    link: "#",
  },
  {
    id: "2",
    name: "RecipeRoot",
    description: "Discover new recipes and plan your weekly meals with ease.",
    icon: PlaceHolderImages.find(p => p.id === "app-icon-recipe")?.imageUrl || "",
    link: "#",
  },
  {
    id: "3",
    name: "Mindful Journal",
    description: "A simple space for your thoughts, with guided prompts for daily reflection.",
    icon: PlaceHolderImages.find(p => p.id === "app-icon-journal")?.imageUrl || "",
    link: "#",
  },
  {
    id: "4",
    name: "FitFlow",
    description: "Log your workouts, track your progress, and stay motivated on your fitness journey.",
    icon: PlaceHolderImages.find(p => p.id === "app-icon-fitness")?.imageUrl || "",
    link: "#",
  },
  {
    id: "5",
    name: "BookNook",
    description: "Organize your reading list, track your progress, and discover your next favorite book.",
    icon: PlaceHolderImages.find(p => p.id === "app-icon-books")?.imageUrl || "",
    link: "#",
  },
  {
    id: "6",
    name: "GlobeTrekker",
    description: "Plan your next adventure and keep a beautiful journal of your travels.",
    icon: PlaceHolderImages.find(p => p.id === "app-icon-travel")?.imageUrl || "",
    link: "#",
  },
  {
    id: "7",
    name: "Aqua-Me",
    description: "Stay hydrated with personalized reminders to drink water throughout the day.",
    icon: PlaceHolderImages.find(p => p.id === "app-icon-hydration")?.imageUrl || "",
    link: "#",
  },
  {
    id: "8",
    name: "ChordCraft",
    description: "Learn new chords, create progressions, and practice your favorite songs.",
    icon: PlaceHolderImages.find(p => p.id === "app-icon-music")?.imageUrl || "",
    link: "#",
  },
  {
    id: "9",
    name: "Stellar View",
    description: "Identify stars, constellations, and planets in the night sky with this easy-to-use guide.",
    icon: PlaceHolderImages.find(p => p.id === "app-icon-astronomy")?.imageUrl || "",
    link: "#",
  },
  {
    id: "10",
    name: "PetPal",
    description: "Keep track of your pet's health, appointments, and daily needs all in one place.",
    icon: PlaceHolderImages.find(p => p.id === "app-icon-petcare")?.imageUrl || "",
    link: "#",
  },
];

export function AppsShowcase() {
  return (
    <section id="apps" className="py-20 sm:py-32 bg-background/50">
      <div className="container mx-auto max-w-7xl px-4">
        <MotionView>
          <h2 className="font-headline text-center text-4xl font-bold tracking-tighter sm:text-5xl">
            Our Creations
          </h2>
          <p className="mt-4 text-center text-lg text-muted-foreground sm:text-xl">
            A selection of apps we've passionately built.
          </p>
        </MotionView>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {apps.map((app, index) => (
            <MotionView key={app.id} delay={0.1 * index}>
              <Card className="group h-full transform-gpu overflow-hidden border-white/10 bg-black/40 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(0,240,255,0.2)] hover:border-primary/50 hover:bg-black/60">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
                <CardHeader className="relative z-10 flex-row items-start gap-4 space-y-0">
                  <Image
                    src={app.icon}
                    alt={`${app.name} icon`}
                    width={64}
                    height={64}
                    className="rounded-2xl border border-border/50"
                  />
                  <div>
                    <CardTitle className="text-2xl font-bold">{app.name}</CardTitle>
                    <CardDescription className="mt-1">{app.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="link" className="p-0 group-hover:text-accent">
                    <Link href={app.link} target="_blank" rel="noopener noreferrer">
                      View on Google Play
                      <ArrowUpRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </MotionView>
          ))}
        </div>
      </div>
    </section>
  );
}
