import { Button } from "@react-email/components";
import React from "react";
import { arial_font } from "./style";

export function CtaButton({ href, label }: { href: string; label: string }) {
  return (
    <Button
      className="text-center my-6 border-[1.5px] border-black mx-auto w-full rounded-full py-[6px] text-accent text-[32px] leading-[150%]"
      style={arial_font}
      style={{
        border: "1.5px solid",
      }}
      href={href}
    >
      {label}
    </Button>
  );
}
