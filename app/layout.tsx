// layout.tsx
import type { Metadata } from "next";
import { Jost, Playball } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const jost = Jost({ subsets: ["latin"] });
const playball = Playball({
  subsets: ["latin"],
  variable: "--font-playball",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "SkillSnap",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jost.className} ${playball.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
