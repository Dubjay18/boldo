import { Check, Eye, Feather, Sun } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { H2, P } from "@/components/ui/typography";

export function Features() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-28 items-center mb-32">
          <div className="relative">
            <div className="relative aspect-auto w-full h-[78vh] rounded-lg overflow-hidden">
              <Image
                src="/feature1.png"
                alt="Customer success"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="space-y-8">
            <H2>
              We connect our customers with the best, and help them keep up-and
              stay open.
            </H2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-navy-900">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <P>We connect our customers with the best.</P>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-navy-900">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <P>Advisor success customer launch party.</P>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-navy-900">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <P>Business-to-consumer long tail.</P>
              </div>
            </div>
            <Button size={"xl"} variant={"default"} className=" ">
              Start now
            </Button>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8 lg:order-2">
            <H2>
              We connect our customers with the best, and help them keep up-and
              stay open.
            </H2>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-primary text-white rounded-lg shadow-sm">
                <div className="flex-shrink-0">
                  <Feather className="w-6 h-6" />
                </div>
                <P>We connect our customers with the best.</P>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md">
                <div className="flex-shrink-0">
                  <Eye className="w-6 h-6" />
                </div>
                <P>Advisor success customer launch party.</P>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md">
                <div className="flex-shrink-0">
                  <Sun className="w-6 h-6" />
                </div>
                <P>Business-to-consumer long tail.</P>
              </div>
            </div>
          </div>
          <div className="relative lg:order-1">
            <div className="relative aspect-auto w-full h-[80vh] rounded-lg overflow-hidden">
              <Image
                src="/feature2.png"
                alt="Customer success"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
