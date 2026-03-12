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
    name: "Zenith Weather",
    description: "Hyper-local weather forecasts with a stunning, minimalist interface.",
    icon: PlaceHolderImages.find(p => p.id === "app-icon-weather")?.imageUrl || "",
    link: "#",
  },
  {
    id: "2",
    name: "Echo Notes",
    description: "A beautiful, cross-platform note-taking app with markdown support.",
    icon: PlaceHolderImages.find(p => p.id === "app-icon-notes")?.imageUrl || "",
    link: "#",
  },
  {
    id: "3",
    name: "Nova Launcher",
    description: "Transform your home screen with this highly customizable launcher.",
    icon: PlaceHolderImages.find(p => p.id === "app-icon-launcher")?.imageUrl || "",
    link: "#",
  },
  {
    id: "4",
    name: "Orbit Finance",
    description: "Track your expenses and manage your budget with ease and clarity.",
    icon: PlaceHolderImages.find(p => p.id === "app-icon-finance")?.imageUrl || "",
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
              <Card className="group h-full transform-gpu overflow-hidden border-border/50 bg-card/50 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20">
                <CardHeader className="flex-row items-start gap-4 space-y-0">
                  <Image
                    src={app.icon}
                    alt={`${app.name} icon`}
                    width={64}
                    height={64}
                    className="rounded-2xl border-2 border-border/50"
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
