import { MotionView } from "../ui/motion-view";

export function About() {
  return (
    <section id="about" className="py-20 sm:py-32">
      <div className="container mx-auto max-w-4xl px-4 text-center">
        <MotionView>
          <h2 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl">
            Who We Are
          </h2>
        </MotionView>
        <MotionView delay={0.2}>
          <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
            Double Dairy is an organization dedicated to crafting modern Android applications. We thrive on leveraging advanced technologies and intuitive design to create mobile experiences that are not only powerful and performant but also a delight to use. Our passion is to push the boundaries of what's possible on mobile.
          </p>
        </MotionView>
      </div>
    </section>
  );
}
