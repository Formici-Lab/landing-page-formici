import type { Metadata } from "next";
import { Host_Grotesk, Mozilla_Headline } from "next/font/google";
import "./globals.css";

const hostGrotesk = Host_Grotesk({
  variable: "--font-host-grotesk",
  subsets: ["latin"],
});

const mozillaHeadline = Mozilla_Headline({
  variable: "--font-mozilla-headline",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Formici Creative Lab",
  description:
    "Formici Creative Lab is a multidisciplinary branding lab that crafts thoughtful, research-driven design solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${hostGrotesk.variable} ${mozillaHeadline.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
