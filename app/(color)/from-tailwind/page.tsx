import ColorComponent from "@/components/color";
import { type Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Tailwind to Standard Color Conversion - TailwindMate",
  description:
    "Translate Tailwind color classes to HEX, RGB, RGBA, HSL, and HSLA formats with TailwindMate. Enhance your workflow with our Tailwind to standard color conversion tool.",
};

export default function Page() {
  return (
    <section className="mx-auto w-full max-w-[1200px]">
      <p className="mt-5 max-w-[750px] text-[15px] text-neutral-300 sm:mt-3">
        Enter your tailwind color class below to get the equivalent color codes
        in various color code formats.
      </p>
      <ColorComponent
        placeholder={"Enter tailwind color class"}
        type="from-tailwind"
      />
    </section>
  );
}
