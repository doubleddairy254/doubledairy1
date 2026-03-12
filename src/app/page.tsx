import { Hero } from '@/components/sections/hero';
import { About } from '@/components/sections/about';
import { AppsShowcase } from '@/components/sections/apps-showcase';
import { Technology } from '@/components/sections/technology';
import { Features } from '@/components/sections/features';
import { Contact } from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <Hero />
      <About />
      <AppsShowcase />
      <Technology />
      <Features />
      <Contact />
    </div>
  );
}
