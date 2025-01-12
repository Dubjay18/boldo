import { teachers_font } from "@/lib/fonts";
import { DM_Serif_Display } from "next/font/google";

const dm_serif_display = DM_Serif_Display({
  weight: ["400"],
});

const dm_serif_display_font = dm_serif_display.className;
export function TypographyH1({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={`${className} ${dm_serif_display_font} scroll-m-20 text-4xl font-normal tracking-tight lg:text-6xl`}
    >
      {children}
    </h1>
  );
}

export function TypographyH2({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`${className} ${dm_serif_display_font} scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0`}
    >
      {children}
    </h2>
  );
}

export function TypographyH3({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={`${className} ${dm_serif_display_font} scroll-m-20 text-2xl font-semibold tracking-tight`}
    >
      {children}
    </h3>
  );
}

export function TypographyH4({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h4
      className={`${className} ${dm_serif_display_font} scroll-m-20 text-xl font-semibold tracking-tight`}
    >
      {children}
    </h4>
  );
}

export function TypographyP({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`${className} ${teachers_font} leading-7 [&:not(:first-child)]:mt-6`}
    >
      {children}
    </p>
  );
}

export function TypographySpan({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <span className={`${className} ${teachers_font}`}>{children}</span>;
}
