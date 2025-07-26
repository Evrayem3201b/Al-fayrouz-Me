"use client";
import { MenuIcon, ShoppingCartIcon } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import Logo from "@/components/logo";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import localFont from "next/font/local";

const tajawal = localFont({
  src: "../public/fonts/Tajawal-Regular.ttf",
});

// Navigation links array to be used in both desktop and mobile menus
const navigationLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/air-condition", label: "تبريد و تكيف" },
  { href: "/kitchen", label: "معدات مطابخ" },
  { href: "/electricity", label: "ادوات كهربائية" },
];

export default function Component() {
  const [menuOpen, setMenuState] = useState(false);
  const toggleMenu = () => {
    setMenuState(!menuOpen);
  };
  const pathname = usePathname();
  return (
    <header
      className={`${tajawal.className} flex flex-col border-b px-4 md:px-6 max-w-4xl mx-auto`}
      dir="rtl"
    >
      <div className="flex h-16 items-center justify-between gap-4">
        {/* Left side */}
        <div className="flex items-center gap-2 max-md:w-full">
          <div className="flex items-center gap-6 max-md:justify-between max-md:w-full ">
            {/* Navigation menu */}
            <Link href="/" className="text-primary hover:text-primary/90">
              <Logo />
            </Link>
            <nav className="max-md:hidden">
              <ul className="flex gap-5">
                {navigationLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className={`text-muted-foreground hover:text-primary py-1.5 font-medium text-lg ${pathname === link.href ? "text-primary" : ""}`}
                  >
                    {link.label}
                  </Link>
                ))}
              </ul>
            </nav>
            <nav
              className={`${menuOpen ? "flex" : "hidden"} gap-3 text-lg top-[55px] left-0 ml-[11px] flex-col z-10 absolute bg-background border p-4 rounded-md`}
            >
              <ul className="gap-3">
                {navigationLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.href}
                      className={`${pathname === link.href ? "text-primary" : ""}`}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <hr className="" />
              <div className="flex flex-row items-center justify-evenly">
                <ModeToggle style="ghost" perimeter="." />
                <ShoppingCartIcon className="text-foreground size-4 hover:bg-accent hover:text-accent-foreground" />
              </div>
            </nav>
            <MenuIcon onClick={toggleMenu} size={22} className="md:hidden" />
          </div>
        </div>
        {/* Right side */}
        <div className="flex items-center gap-2 max-md:hidden">
          <ModeToggle />
        </div>
      </div>
      {/*       <DropNav /> */}
    </header>
  );
}
