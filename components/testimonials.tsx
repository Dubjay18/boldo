"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { H2 } from "@/components/ui/typography";

const testimonials = [
  {
    quote:
      "Buyer buzz partner network disruptive non-disclosure agreement business",
    author: "Albus Dumbledore",
    position: "Manager @ Howarts",
    avatar: "/profile.png",
  },
  {
    quote:
      "Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.",
    author: "Severus Snape",
    position: "Manager @ Slytherin",
    avatar: "/profile.png",
  },
  {
    quote:
      "Release facebook responsive web design business model canvas seed money monetization.",
    author: "Harry Potter",
    position: "Team Leader @ Gryffindor",
    avatar: "/profile.png",
  },
  {
    quote:
      "Release facebook responsive web design business model canvas seed money monetization.",
    author: "Harry Potter",
    position: "Team Leader @ Gryffindor",
    avatar: "/profile.png",
  },
  {
    quote:
      "Release facebook responsive web design business model canvas seed money monetization.",
    author: "Harry Potter",
    position: "Team Leader @ Gryffindor",
    avatar: "/profile.png",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-navy-900">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <H2 className="text-white">
            An enterprise template to ramp up your company website
          </H2>
        </div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <div className="flex justify-end gap-2 mt-8">
            <CarouselPrevious
              variant={"accent"}
              className="relative bg-gray-100 inset-auto"
            />
            <CarouselNext
              variant={"accent"}
              className="relative bg-gray-100 inset-auto"
            />
          </div>
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <Card className="p-8 bg-white">
                  <blockquote className="space-y-6">
                    <p className="text-xl font-manrope">
                      "{testimonial.quote}"
                    </p>
                    <footer className="flex items-center gap-4">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.author}
                        width={48}
                        height={48}
                        className="rounded-full"
                      />
                      <div>
                        <cite className="not-italic font-semibold font-manrope">
                          {testimonial.author}
                        </cite>
                        <p className="text-sm text-gray-600 font-opensans">
                          {testimonial.position}
                        </p>
                      </div>
                    </footer>
                  </blockquote>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
