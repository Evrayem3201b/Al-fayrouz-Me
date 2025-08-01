// app/cart/page.tsx
import CartClient from "./CartClient";

interface CartPageProps {
  searchParams?: Record<string, string | string[] | undefined>;
}

export default function CartPage({ searchParams }: any) {
  return <CartClient searchParams={searchParams} />;
}
