import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThreeCanvas } from "@/components/ui/three-canvas";
import { ArrowRight } from "lucide-react";
import { MotionView } from "../ui/motion-view";

export function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[700px] w-full overflow-hidden">
      <ThreeCanvas />
      <div className="container relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-4 text-center">
        <MotionView delay={0}>
          <h1 className="font-headline text-5xl font-extrabold tracking-tighter sm:text-7xl md:text-8xl lg:text-9xl">
            <span className="bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
              Double Dairy
            </span>
          </h1>
        </MotionView>
        <MotionView delay={0.2}>
          <p className="font-body mx-auto mt-4 max-w-2xl text-lg text-foreground/80 sm:text-xl md:text-2xl">
            Building innovative mobile experiences
          </p>
        </MotionView>
        <MotionView delay={0.4}>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button asChild size="lg" className="group text-lg">
              <Link href="#apps">
                Explore Our Apps
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg">
              <Link href="#contact">Contact Us</Link>
            </Button>
          </div>
        </MotionView>
      </div>
    </section>
  );
}
