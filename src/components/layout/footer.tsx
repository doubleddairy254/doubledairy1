import Link from "next/link";
import { Layers } from "lucide-react";

const socialLinks = [
  { name: "Google Play", href: "#", icon: <GooglePlayIcon /> },
  { name: "GitHub", href: "#", icon: <GitHubIcon /> },
  { name: "Twitter", href: "#", icon: <TwitterIcon /> },
];

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background/50">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <Layers className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold">Double Dairy</span>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Double Dairy Digital. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function GooglePlayIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 7.2v9.6l7.5-4.8Z" />
      <path d="M21 12 10.5 4.8v14.4Z" />
      <path d="m3.5 7 7-4.5 7 4.5" />
      <path d="m3.5 17 7 4.5 7-4.5" />
    </svg>
  );
}

function GitHubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function TwitterIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 3.3 4.4 3.3 4.4s-1.4 1.4-2.8 2.1c.1.7.1 1.3.1 2.1 0 7.4-5.2 12.3-12.3 12.3-2.1 0-4-.6-5.6-1.7.3.1.6.1.9.1 1.7 0 3.3-.6 4.6-1.6-1.6-.1-2.9-1.1-3.4-2.6.2.1.5.1.7.1.3 0 .6 0 .9-.1-1.7-.3-3-1.7-3-3.5v.1c.5.3 1.1.4 1.7.5-1-.7-1.7-1.8-1.7-3.1 0-1.1.3-2.1.8-2.9 1.8 2.2 4.5 3.6 7.5 3.8-.1-.3-.1-.6-.1-.9 0-2.1 1.7-3.8 3.8-3.8 1.1 0 2.1.5 2.8 1.2.8-.2 1.6-.4 2.3-.9-.3.8-.8 1.5-1.5 1.9.7-.1 1.4-.3 2-.5z" />
    </svg>
  );
}
