import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import { manrope, openSans } from "./fonts";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Boldo Landing Page",
  description: "A modern landing page for Boldo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} ${openSans.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <main className="min-h-screen">{children}</main>

          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
