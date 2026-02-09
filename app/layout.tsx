import type { Metadata } from "next";
import { Cabin, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const cabin = Cabin({
  variable: "--font-cabin",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VIP NextGen Tutoring",
  description:
    "Personalized tutoring with modern academic, AI, and investing insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${cabin.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
