import { P } from "@/components/ui/typography";
import Image from "next/image";

export function LogoSlider() {
  return (
    <div className="bg-navy-900/50 py-12">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between gap-8 overflow-hidden">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="flex-shrink-0">
              {i % 2 === 0 ? (
                <Image
                  src="/slide1.svg"
                  alt="slide1"
                  height={150}
                  width={100}
                />
              ) : (
                <Image
                  src="/slide2.svg"
                  alt="slide2"
                  height={150}
                  width={100}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
