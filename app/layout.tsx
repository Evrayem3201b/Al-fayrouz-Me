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
    <html lang="en" suppressHydrationWarning>
      <body className={`antialiased mx-auto p-0 m-0`}>{children}</body>
    </html>
  );
}
