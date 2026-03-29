import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ashwin Deshpande",
  description: "Builder. Engineer. Maker of things.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#09090b] text-zinc-100 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
