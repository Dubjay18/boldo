import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { H2, H3, P, Subtle } from "@/components/ui/typography";

export function Services() {
  const features = [
    {
      title: "Cool feature title",
      description: "Learning curve network effects return on investment.",
      image: "/placeholder-1.png",
    },
    {
      title: "Even cooler feature",
      description: "Learning curve network effects return on investment.",
      image: "/placeholder-2.png",
    },
    {
      title: "Cool feature title",
      description: "Learning curve network effects return on investment.",
      image: "/placeholder-3.png",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <Subtle>Our Services</Subtle>
          <H2 className="max-w-5xl text-center mx-auto">
            Handshake infographic mass market crowdfunding iteration.
          </H2>
        </div>
        <div className="grid md:grid-cols-3 max-md:place-items-center gap-8">
          {features.map((feature, i) => (
            <FeatureCard
              key={i}
              description={feature.description}
              image={feature.image}
              title={feature.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
interface FeatureCardProps {
  title: string;
  description: string;
  image: string;
}

export function FeatureCard({ title, description, image }: FeatureCardProps) {
  return (
    <div className="space-y-6 max-md:flex max-md:flex-col max-md:items-center">
      <div className="aspect-auto w-[70%] h-[40vh] relative bg-emerald-400 rounded-2xl overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>
      <H3>{title}</H3>
      <P className="text-gray-600">{description}</P>
      <div className="py-4 w-fit border-b border-primary">
        <Link
          href="#"
          className="inline-flex items-center text-primary group  text-lg font-semibold font-manrope hover:underline"
        >
          Explore page{" "}
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-5 duration-300 transition-all" />
        </Link>
      </div>
    </div>
  );
}
