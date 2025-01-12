import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { P, Small } from "@/components/ui/typography";
import Image from "next/image";

const footerLinks = {
  landings: {
    title: "Landings",
    links: ["Home", "Products", "Services"],
  },
  company: {
    title: "Company",
    links: ["Home", { text: "Careers", badge: "Hiring!" }, "Services"],
  },
  resources: {
    title: "Resources",
    links: ["Blog", "Products", "Services"],
  },
};

export function Footer() {
  return (
    <footer className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 mb-12">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-4">
              <Image
                src={"/Logo-navy.svg"}
                alt="logo-navy"
                width={100}
                height={100}
              />
            </Link>
            <P className="text-gray-600 mb-8">
              Social media validation business model canvas graphical user
              interface launch party creative facebook iPad twitter.
            </P>
            <Small className="text-gray-600">All rights reserved.</Small>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:col-span-8 lg:justify-end">
            {Object.entries(footerLinks).map(([key, section]) => (
              <div key={key}>
                <h3 className="font-bold mb-4 font-manrope">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, index) => (
                    <li key={index}>
                      <Link
                        href="#"
                        className="text-gray-600 hover:text-gray-900 inline-flex items-center gap-2"
                      >
                        {typeof link === "string" ? (
                          link
                        ) : (
                          <>
                            {link.text}
                            {link.badge && (
                              <Badge className="bg-secondary text-black hover:bg-emerald-500 text-xs">
                                {link.badge}
                              </Badge>
                            )}
                          </>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
