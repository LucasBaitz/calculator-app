import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";

const leagueSpartan = League_Spartan({ subsets: ["latin"], weight: ["700"] });

export const metadata: Metadata = {
  title: "Calculator app",
  description:
    "Frontend Mentor's 'Calculator app' Challenge Developed Using Next.js",
  creator: "Lucas Baitz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={leagueSpartan.className}>{children}</body>
    </html>
  );
}
