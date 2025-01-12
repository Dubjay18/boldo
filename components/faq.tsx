import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { H2, P } from "@/components/ui/typography";

const faqs = [
  {
    question: "We connect our customers with the best?",
    answer:
      "We connect our customers with the best, and help them keep up-and stay open. Our innovative platform helps businesses thrive in the digital age.",
  },
  {
    question: "Android research & development rockstar?",
    answer:
      "Our team of Android development experts creates cutting-edge solutions that push the boundaries of mobile technology while maintaining user-friendly experiences.",
  },
  {
    question: "We connect our customers with the best?",
    answer:
      "By leveraging our extensive network and industry expertise, we ensure our customers are always connected with the best opportunities and solutions in their market.",
  },
];

export function FAQ() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="relative aspect-auto w-full h-[48vh] md:col-span-2 rounded-lg overflow-hidden">
            <Image
              src="/c-image.png"
              alt="Modern office space with people working"
              fill
              className="object-cover"
            />
          </div>

          <H2 className="">
            We connect our customers with the best, and help them keep up-and
            stay open.
          </H2>
          <div className="space-y-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-manrope">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <P className="text-gray-600">{faq.answer}</P>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
