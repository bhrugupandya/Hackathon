import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar"; // Import Navbar component

export const metadata: Metadata = {
  title: "Bhrugu Pandya | UX Designer",
  description:
    "Research-driven UX designer from Ahmedabad crafting clear, useful digital products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground antialiased">
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8 lg:px-10">
            <Navbar /> {/* Render Navbar */}
            {children}
        </div>
      </body>
    </html>
  );
}
