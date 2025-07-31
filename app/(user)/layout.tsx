import "../../app/globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import NavigationBar from "@/components/Navigation";
import localFont from "next/font/local";

const tajawal = localFont({
  src: "../../public/fonts/Tajawal-Regular.ttf",
});
const massri = localFont({
  src: "../../public/fonts/ElMessiri-VariableFont_wght.ttf",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavigationBar />
      <main dir="rtl" className={`relative mx-auto p-0 m-0`}>
        {children}
      </main>
    </>
  );
}
