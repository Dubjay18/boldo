import React from "react";
import { TypographyH4, TypographySpan } from "../typography";
import Image from "next/image";

function VisionMissionSection() {
  return (
    <div className="grid grid-cols-3 container mx-auto gap-5 my-[20vh] ">
      <div className="min-h-[30vh]">
        <div>
          <TypographySpan className="font-bold text-2xl text-secondary">
            Our Vision
          </TypographySpan>
          <br />
          <TypographySpan className="font-medium text-2xl">
            is to create maternal and perinatal support for mothers; and
            empowerment for young girls to thrive.{" "}
          </TypographySpan>
        </div>
      </div>
      <div className="flex items-center justify-center relative">
        <div className="absolute w-[180px] h-[180px] -z-[1] rounded-md bg-[#ECECEC] top-0 right-24" />
        <div className="absolute w-[180px] h-[180px] -z-[1] rounded-md bg-[#ECECEC] -bottom-1 left-24" />
        <Image
          src={"/rough_bg2.svg"}
          alt="Rough Background"
          width={560}
          height={370}
          className="absolute max-h-[220px] top-[20%] z-[-2]"
        />
        <Image
          src="/vision-mission-image.png"
          alt="Vision Image"
          width={270}
          height={270}
          className=""
        />
      </div>
      <div className="min-h-[30vh] flex flex-col justify-end">
        <div className="mt-auto">
          <TypographySpan className="font-bold text-2xl text-secondary">
            Our Mission
          </TypographySpan>
          <br />
          <TypographySpan className="max-w-sm font-medium text-2xl">
            is to contribute to the challenges of perinatal health of women and
            marginalization of girls in our community.
          </TypographySpan>
        </div>
      </div>
    </div>
  );
}

export default VisionMissionSection;
