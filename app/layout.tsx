import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const sourceSans3Italic = localFont({
  src: "./fonts/SourceSans3-Italic-VariableFont_wght.ttf",
  variable: "--font-sourcesans3-italic",
  weight: "100 900",
});
const sourceSans3 = localFont({
  src: "./fonts/SourceSans3-VariableFont_wght.ttf",
  variable: "--font-sourcesans3-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Calendar Test Task",
  description: "Calendar Test Task by Ivan Khoroshylov",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sourceSans3Italic.variable} ${sourceSans3.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
