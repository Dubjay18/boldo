import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
}

export function H1({ children, className, ...props }: TypographyProps) {
  return (
    <h1
      className={cn(
        "font-manrope text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-6xl",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  );
}

export function H2({ children, className, ...props }: TypographyProps) {
  return (
    <h2
      className={cn(
        "font-manrope text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl",
        className
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

export function H3({ children, className, ...props }: TypographyProps) {
  return (
    <h3
      className={cn(
        "font-manrope text-2xl font-bold leading-tight tracking-tight md:text-3xl",
        className
      )}
      {...props}
    >
      {children}
    </h3>
  );
}

export function Lead({ children, className, ...props }: TypographyProps) {
  return (
    <p
      className={cn(
        "font-opensans text-xl leading-relaxed text-gray-500",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}

export function Large({ children, className, ...props }: TypographyProps) {
  return (
    <p
      className={cn("font-opensans text-lg leading-relaxed", className)}
      {...props}
    >
      {children}
    </p>
  );
}

export function P({ children, className, ...props }: TypographyProps) {
  return (
    <p className={cn("font-opensans leading-relaxed", className)} {...props}>
      {children}
    </p>
  );
}

export function Small({ children, className, ...props }: TypographyProps) {
  return (
    <p
      className={cn("font-opensans text-sm leading-relaxed", className)}
      {...props}
    >
      {children}
    </p>
  );
}

export function Subtle({ children, className, ...props }: TypographyProps) {
  return (
    <p
      className={cn(
        "font-opensans text-sm text-gray-500 leading-relaxed",
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}
