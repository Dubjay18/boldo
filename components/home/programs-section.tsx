import React from "react";
import { TypographyH2, TypographyP, TypographySpan } from "../typography";
import { ArrowRightIcon, Clock8 } from "lucide-react";
import Link from "next/link";

function ProgramsSection() {
  const programs = [
    {
      icon: <Clock8 size={28} className="text-secondary" />,
      title: "SAVE TIME, SAVE LIFE",
      description:
        "Provide support to care for pregnant women and babies without delay.",
    },
    {
      icon: <Clock8 size={28} className="text-secondary" />,
      title: "HEALTH PRACTIONALS EMPOWERMENT PROGRAM",
      description:
        "Provide training for healthcare workers through seminars and  workshops.",
    },
    {
      icon: <Clock8 size={28} className="text-secondary" />,
      title: "TRAIN A GIRL CHILD PROJECT",
      description:
        "Provide training for healthcare workers through seminars and  workshops.",
    },
    {
      icon: <Clock8 size={28} className="text-secondary" />,
      title: "MATERNAL HEALTH RESEARCH",
      description:
        "Provide training for healthcare workers through seminars and  workshops.",
    },
  ];
  return (
    <div className="container mx-auto py-20 ">
      <TypographyH2 className="mx-auto text-secondary text-center">
        Our Programs
      </TypographyH2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
        {programs.map((program, index) => (
          <div
            key={index}
            className={` ${
              index !== programs.length - 1 ? "border-r border-gray-200" : ""
            } py-8`}
          >
            <ProgramsCard
              title={program.title}
              description={program.description}
              icon={program.icon}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-end mt-16">
        <Link href="/programs">
          <TypographySpan className="text-primary text-lg underline font-semibold group flex items-center">
            Learn More About Our Programs{" "}
            <ArrowRightIcon
              size={20}
              className="group-hover:scale-150 group-hover:translate-x-5 duration-300 transition-all"
            />
          </TypographySpan>
        </Link>
      </div>
    </div>
  );
}

export default ProgramsSection;

function ProgramsCard({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center ">
      <div className="flex items-center justify-center">{icon}</div>
      <TypographySpan className="text-secondary font-medium mt-5 text-lg max-w-[15rem] text-center">
        {title}
      </TypographySpan>
      <TypographyP className="text-center max-w-[18rem]">
        {description}
      </TypographyP>
    </div>
  );
}
