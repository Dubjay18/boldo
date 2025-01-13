import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { manrope, openSans } from "./fonts";

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
        <main className="min-h-screen">{children}</main>

        <Toaster />
      </body>
    </html>
  );
}
