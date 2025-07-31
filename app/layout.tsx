import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Al Fayrouz | الفيروز",
  description: "الفيروز لقطع الغيار",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
