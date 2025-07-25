import localFont from "next/font/local";

const Lemonada = localFont({
  src: "../public/fonts/lemon.ttf",
});
export default function Logo() {
  return <h1 className={`${Lemonada.className} text-2xl`}>الفيروز</h1>;
}
