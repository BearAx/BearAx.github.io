import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://medvax-ai.github.io"),
  title: "Aleksandr Medvedev — ML Research / Systems",
  description:
    "Computer science student building and evaluating ML systems, with work in model routing, evaluation, and reproducible experiments.",
  openGraph: {
    title: "Aleksandr Medvedev — ML Research / Systems",
    description:
      "Computer science student building and evaluating ML systems.",
    type: "website",
    url: "https://medvax-ai.github.io",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aleksandr Medvedev — ML Research / Systems",
    description:
      "Computer science student building and evaluating ML systems.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
