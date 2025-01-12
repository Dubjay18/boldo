import React from "react";
import { TypographyH1, TypographyP } from "../typography";
import { HeroSlider } from "../hero-slider";
import { Button } from "../ui/button";
import { ArrowRight, Heart } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="container mx-auto">
      <div className="flex max-md:flex-col justify-between">
        <div className="max-w-md pt-5 md:pt-20">
          <TypographyH1 className="!leading-normal mt-20">
            <span className="text-secondary">Building</span> a World Where{" "}
            <span className="text-secondary">Every Life Thrives.</span>
          </TypographyH1>
          <TypographyP className="mt-6 max-w-3xl text-[12px] text-gray-500">
            Mary Care Foundation (MCF) is an NGO that was established in 2019 to
            offer support to mothers in emergency cases at childbirth and
            postpartum period. MCF (with registration number: 184127), also
            contributes to young girls’ empowerment.
          </TypographyP>
        </div>
        <div className="bg-accent md:absolute rounded-bl-2xl flex items-end right-0 pt-20 max-md:w-full w-[50vw] h-[90vh]">
          <HeroSlider />
        </div>
      </div>
      <div className="flex gap-10 mt-20">
        <Button variant="default" size={"lg"}>
          Donate Now <Heart fill="white" size={20} />
        </Button>
        <Button variant="link" className="text-secondary" size={"lg"}>
          Learn More <ArrowRight fill="currentColor" size={20} />
        </Button>
      </div>
      <div className="flex gap-10 mt-20">
        <Image src="/oau_logo.png" alt="OAU Logo" width={40} height={40} />
        <Image
          src="/oauthc_logo.png"
          alt="OAUTHC Logo"
          width={40}
          height={40}
        />
        <Image
          src="/liverpool_logo.png"
          alt="liverpool Logo"
          width={130}
          height={50}
        />
      </div>
    </div>
  );
}
