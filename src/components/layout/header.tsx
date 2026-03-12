"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Layers, Menu, X } from "lucide-react";
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
          ? "border-b border-border/50 bg-background/80 backdrop-blur-lg"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex w-full max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2" aria-label="Home">
          <Layers className="h-7 w-7 text-primary" />
          <span className="text-xl font-bold tracking-tight">Double Dairy</span>
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
                    <Layers className="h-7 w-7 text-primary" />
                    <span className="text-xl font-bold tracking-tight">Double Dairy</span>
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
