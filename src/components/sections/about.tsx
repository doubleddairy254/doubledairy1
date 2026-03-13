import { MotionView } from "../ui/motion-view";

export function About() {
  return (
    <section id="about" className="py-20 sm:py-32 relative">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <MotionView>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 p-8 sm:p-12 backdrop-blur-xl shadow-[0_0_30px_rgba(0,240,255,0.1)]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
            <h2 className="relative z-10 font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
              Who We Are
            </h2>
            <p className="relative z-10 mt-6 text-lg text-muted-foreground sm:text-xl">
              DoubleDDairy is an organization dedicated to crafting modern Android applications. We thrive on leveraging advanced technologies and intuitive design to create mobile experiences that are not only powerful and performant but also a delight to use. Our passion is to push the boundaries of what's possible on mobile.
            </p>
          </div>
        </MotionView>
      </div>
    </section>
  );
}
