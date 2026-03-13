"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#apps", label: "Apps" },
  { href: "#tech", label: "Technology" },
  { href: "#contact", label: "Contact" },
];

const DDIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
        <linearGradient id="dd-grad-header" x1="0" y1="0" x2="32" y2="32">
            <stop stopColor="hsl(var(--primary))"/>
            <stop offset="1" stopColor="hsl(var(--accent))"/>
        </linearGradient>
        </defs>
        <path d="M6 4H18C23.5228 4 28 8.47715 28 14V18C28 23.5228 23.5228 28 18 28H6V4Z" fill="url(#dd-grad-header)"/>
        <path d="M14 11H18C19.6569 11 21 12.3431 21 14V18C21 19.6569 19.6569 21 18 21H14V11Z" fill="hsl(var(--background))"/>
    </svg>
);


export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLinks = ({ inSheet }: { inSheet?: boolean }) => (
    <nav
      className={cn(
        "flex items-center gap-1",
        inSheet ? "flex-col gap-4 pt-8" : "hidden md:flex"
      )}
    >
      {navLinks.map((link) => (
        <Button
          key={link.href}
          variant="link"
          asChild
          className={cn(
            "text-lg text-foreground/80 transition-colors hover:text-primary hover:no-underline",
            inSheet && "text-2xl"
          )}
          onClick={() => inSheet && setIsMobileMenuOpen(false)}
        >
          <Link href={link.href}>{link.label}</Link>
        </Button>
      ))}
    </nav>
  );

  return (
    <header
      className={cn(
        "sticky top-0 z-50 flex h-20 items-center justify-center transition-all duration-300",
        scrolled
          ? "border-b border-border/50 bg-background/50 backdrop-blur-lg"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex w-full max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2" aria-label="Home">
          <DDIcon className="h-7 w-7" />
          <span className="text-xl font-bold tracking-tight">DoubleDDairy</span>
        </Link>

        <NavLinks />

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[80vw] bg-background/95 backdrop-blur-lg">
               <div className="flex justify-between items-center p-4 -m-4 mb-4 border-b">
                 <Link href="/" className="flex items-center gap-2" aria-label="Home" onClick={() => setIsMobileMenuOpen(false)}>
                    <DDIcon className="h-7 w-7" />
                    <span className="text-xl font-bold tracking-tight">DoubleDDairy</span>
                 </Link>
                <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close menu</span>
                </Button>
               </div>
              <NavLinks inSheet />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
