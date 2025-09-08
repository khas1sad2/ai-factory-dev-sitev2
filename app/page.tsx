"use client"

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Home() {
  const isMobile = useMobile();

  const navigationLinks = [
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="flex flex-col min-h-screen font-sans">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center px-4 sm:px-8 lg:px-16">
          <Link href="/" className="mr-6 flex items-center space-x-2" aria-label="TaskFlow AI Home">
            <Image
              src="/next.svg"
              alt="TaskFlow AI Logo"
              width={100}
              height={24}
              priority
              className="dark:invert"
            />
            <span className="sr-only">TaskFlow AI</span>
          </Link>

          {isMobile ? (
            <div className="flex flex-1 items-center justify-end">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" aria-label="Open navigation menu">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle>Navigation</SheetTitle>
                  </SheetHeader>
                  <nav className="flex flex-col gap-4 py-6" aria-label="Mobile main navigation">
                    {navigationLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="text-lg font-medium hover:text-primary transition-colors"
                      >
                        {link.name}
                      </Link>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          ) : (
            <nav className="flex flex-1 items-center justify-end space-x-6" aria-label="Main navigation">
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>

      <main className="flex-1 container py-12 px-4 sm:px-8 lg:px-16">
        <h1 className="text-center text-5xl font-bold tracking-tight lg:text-6xl">
          Automate Your Workflow with <span className="text-primary">TaskFlow AI</span>
        </h1>
        <p className="mt-4 text-center text-lg text-muted-foreground">
          Streamline collaboration, boost productivity, and empower your remote team.
        </p>

        {/* Placeholder for hero section content */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4">
          <div className="h-64 w-full max-w-2xl rounded-lg bg-muted flex items-center justify-center text-muted-foreground">
            <p>Demo Video Placeholder</p>
          </div>
          <Button size="lg">Start Your Free Trial</Button>
        </div>
      </main>

      <footer className="border-t bg-background py-8 px-4 sm:px-8 lg:px-16">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="text-sm text-muted-foreground text-center md:text-left">
            &copy; {new Date().getFullYear()} TaskFlow AI. All rights reserved.
          </div>
          <nav className="flex gap-6" aria-label="Footer navigation">
            <Link href="/privacy" className="text-sm hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-sm hover:text-primary transition-colors">Terms of Service</Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}