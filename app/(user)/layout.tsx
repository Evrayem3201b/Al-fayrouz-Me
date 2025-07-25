import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import NavigationBar from "@/components/Navigation";
import localFont from "next/font/local";

const tajawal = localFont({
  src: "../../public/fonts/Tajawal-Regular.ttf",
});
const massri = localFont({
  src: "../../public/fonts/ElMessiri-VariableFont_wght.ttf",
});

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

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
    <html lang="en" suppressHydrationWarning dir="rtl">
      <body className={`antialiased mx-auto p-0 m-0`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <NavigationBar />
          <main dir="rtl" className={`relative mx-auto p-0 m-0`}>
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
