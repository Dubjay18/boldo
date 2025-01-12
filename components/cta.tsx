import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { H2 } from "@/components/ui/typography";
import Image from "next/image";

export function CTA() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-navy-900 px-8 py-12 relative rounded-lg overflow-hidden mb-16">
          <Image
            src={"/Ellipse.svg"}
            alt="ellipse"
            height={600}
            width={700}
            className="absolute -top-72 right-0"
          />
          <div className="max-w-3xl mx-auto text-center relative space-y-8">
            <H2 className="text-white">
              An enterprise template to ramp up your company website
            </H2>
            <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="flex-1 h-14 bg-white border-0 px-10 rounded-full placeholder:text-2xl placeholder:text-black"
              />
              <Button
                size={"xl"}
                variant={"secondary"}
                className="h-12 px-8 font-bold"
              >
                Start now
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
