import { Button } from "@/components/ui/button";
import { H1, Lead } from "@/components/ui/typography";
import Image from "next/image";

export function Hero() {
  return (
    <div className="relative overflow-hidden pt-20">
      <Image
        src={"/Ellipse.svg"}
        alt="ellipse"
        height={600}
        width={700}
        className="absolute top-0 right-2"
      />
      <div className="container mx-auto px-6 pt-16 pb-24 relative z-[1]">
        <div className="flex max-md:flex-col max-md:gap-10 justify-between items-center">
          <div className="space-y-8">
            <H1 className="text-white max-w-2xl">
              Save time by building fast with Boldo Template
            </H1>
            <Lead className="text-gray-300 max-w-2xl">
              Funding handshake buyer business-to-business metrics iPad
              partnership.
              <br /> First mover advantage innovator success deployment
              non-disclosure.
            </Lead>
            <div className="flex flex-wrap gap-4">
              <Button className=" font-bold" size={"xl"} variant={"secondary"}>
                Buy template
              </Button>
              <Button
                variant="outline"
                size={"xl"}
                className=" hover:bg-white/10"
              >
                Explore
              </Button>
            </div>
          </div>
          <div className="relative">
            <Image
              src={"/hero-graphics.svg"}
              height={500}
              width={500}
              alt="hero-graphics"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
