import React from "react";
import { TypographyH3 } from "../typography";
import OverlappingImage from "../OverlappingImage";

function ChallengeSection() {
  return (
    <div className="container mx-auto">
      <TypographyH3 className="text-secondary">The Challenge</TypographyH3>
      <OverlappingImage
        src="/vision-mission-image.png"
        alt="Vision Mission Image"
      />
    </div>
  );
}

export default ChallengeSection;
