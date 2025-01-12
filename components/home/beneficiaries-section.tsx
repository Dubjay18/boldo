import Image from "next/image";
import { TypographyH2, TypographySpan } from "../typography";

export default function BeneficiariesSection() {
  const beneficiaries = [
    {
      title: "Mothers (Maternal & Perinatal)",
      image: "/hero_image1.png",
      className: "col-span-2 md:col-span-1",
    },
    {
      title: "Young girls (Empowerment)",
      image: "/hero_image1.png",
      className: "col-span-2 md:col-span-1",
    },
    {
      title: "Healthcare workers, researchers and local communities.",
      image: "/hero_image1.png",
      className: "col-span-2 md:col-span-1",
    },
  ];

  return (
    <section className="py-12 ">
      <div className="container mx-auto">
        <div className="text-center mb-10">
          <TypographyH2 className="text-3xl text-secondary font-bold">
            Our Beneficiaries
          </TypographyH2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {beneficiaries.map((item, index) => (
            <div
              key={index}
              className={`relative overflow-hidden group ${item.className}`}
            >
              <div className="aspect-square">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />

                <div className="absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-60 backdrop-blur-md m-10">
                  <TypographySpan className="text-lg md:text-xl font-medium">
                    {item.title}
                  </TypographySpan>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
