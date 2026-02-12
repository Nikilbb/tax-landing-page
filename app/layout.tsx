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
  title: "TaxFlow | Premium Tax Filing",
  description: "Modern tax compliance for businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning on <html> ignores mismatches in attributes 
    // injected by extensions (like Grammarly's data-gr-ext-installed)
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        // Adding it here as well ensures child-level attribute mismatches 
        // won't trigger the red error overlay during development
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}