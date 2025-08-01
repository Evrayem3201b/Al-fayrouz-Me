// app/layout.tsx
import "./globals.css";
import NavigationBar from "@/components/Navigation";
import localFont from "next/font/local";
import Providers from "@/components/Providers";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Al Fayrouz | الفيروز",
  description: "الفيروز لقطع الغيار",
};

const tajawal = localFont({ src: "../public/fonts/Tajawal-Regular.ttf" });
const massri = localFont({
  src: "../public/fonts/ElMessiri-VariableFont_wght.ttf",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar">
      <body>
        <Providers>
          <NavigationBar />
          <main dir="rtl" className="relative mx-auto p-0 m-0">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
