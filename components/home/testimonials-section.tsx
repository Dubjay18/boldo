"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { TypographyH2, TypographyP, TypographySpan } from "../typography";

interface Testimonial {
  id: number;
  name: string;
  quote: string;
  image: string;
}

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Funke Oladele",
      quote:
        "This organization has been a blessing. Their support during my pregnancy was invaluable, and their programs for young girls are truly inspiring. They make a real difference in our community. I'm forever grateful.",
      image: "/testimonial-1.png",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      quote:
        "The dedication and care shown by this organization is remarkable. They've created a supportive environment that truly empowers women and girls in our community.",
      image: "/testimonial-1.png",
    },
    {
      id: 3,
      name: "Maria Garcia",
      quote:
        "I'm grateful for the incredible impact this organization has had on my life. Their support and guidance have been transformative for me and many others.",
      image: "/testimonial-1.png",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <TypographyH2 className="text-secondary text-4xl font-bold text-center mb-12 ">
          Testimonials
        </TypographyH2>

        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-10 rounded-full p-2  hover:bg-gray-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-8 h-8 text-secondary" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-10 rounded-full p-2  hover:bg-gray-50 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-8 h-8 text-secondary" />
          </button>

          {/* Testimonial Card */}
          <div className="rounded-lg  p-6 md:p-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid relative md:grid-cols-[350px_1fr] gap-6 items-center">
                <div className="relative w-40 h-40 md:w-[290px] md:h-[300px] mx-auto md:mx-0">
                  <Image
                    src={"/rough_bg.png"}
                    alt="Rough Background"
                    width={560}
                    height={370}
                    className="absolute max-h-[420px] top-[20%] right z-[-1]"
                  />
                  <Image
                    src={testimonials[currentSlide].image}
                    alt={testimonials[currentSlide].name}
                    fill
                    className="object-cover rounded !w-[80%] !h-[80%] mx-auto"
                  />
                </div>
                <div className="text-center md:text-left">
                  <TypographySpan className="text-lg md:text-xl  mb-4">
                    "{testimonials[currentSlide].quote}"
                  </TypographySpan>
                  <TypographyP className="font-semibold text-xl text-gray-900">
                    {testimonials[currentSlide].name}
                  </TypographyP>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? "bg-secondary w-4" : "bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
