import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Succes() {
  return (
    <>
      <div>تم ارسال الرسالة</div>
      <Button variant={"default"}>
        <Link href={"/"}>الرجوع الى الصفحة الرئيسية</Link>
      </Button>
    </>
  );
}
