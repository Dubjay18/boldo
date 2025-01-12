"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { P } from "@/components/ui/typography";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "/product", label: "Product" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed w-full z-20 transition-colors duration-300 ${
        isScrolled ? "bg-navy-900" : "bg-transparent"
      }`}
    >
      <nav className="flex items-center justify-between container p-6">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-white font-manrope">
            <Image
              src="/Logo-white.svg"
              alt="logo-white"
              height={100}
              width={200}
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors"
            >
              <P>{link.label}</P>
            </Link>
          ))}
          <Button
            variant="accent"
            className="bg-white text-navy-900 hover:bg-gray-100"
          >
            <P>Log In</P>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-navy-900">
              <SheetHeader>
                <SheetTitle>
                  <Image
                    src="/Logo-white.svg"
                    alt="logo-white"
                    height={50}
                    width={100}
                    priority
                  />
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-4 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-300 hover:text-white font-semibold transition-colors py-2"
                  >
                    <P>{link.label}</P>
                  </Link>
                ))}
                <Button
                  variant="accent"
                  className="bg-white text-navy-900 hover:bg-gray-100 mt-4"
                  onClick={() => setIsOpen(false)}
                >
                  <P>Log In</P>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  );
}
