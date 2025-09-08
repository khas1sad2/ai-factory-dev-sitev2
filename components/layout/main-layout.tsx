"use client"

import Image from "next/image"
import Link from "next/link"
import { Menu } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const isMobile = useMobile()

  const navigationLinks = [
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <>
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
        {children}
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
    </>
  )
}