"use client";
import { ReactNode } from "react";
import { CartProvider } from "use-shopping-cart";
export default function Providers({ children }: { children: ReactNode }) {
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe="" // leave empty if you're not using Stripe
      currency="USD"
      shouldPersist={true}
      successUrl="/success"
      cancelUrl="/"
    >
      {children}
    </CartProvider>
  );
}
