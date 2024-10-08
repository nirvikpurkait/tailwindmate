import React from "react";
import { findTailwindClassHexEquivalent } from "@/scripts/fromTailwind";

type ColorComparisonProps = {
  originalColor: string;
  tailwindColor: string;
  showCloseComparison: boolean;
};

function ColorComparison({
  originalColor,
  tailwindColor,
  showCloseComparison,
}: ColorComparisonProps) {
  return (
    <div
      className={`mt-12 flex flex-col text-neutral-300 transition-all md:flex-row ${showCloseComparison ? `gap-0` : `gap-4`}`}
    >
      <div className="flex w-full flex-col">
        <p className="text-lg font-bold text-white">Original Color</p>
        <p>Original color code: {originalColor}</p>
        <div
          className={`mt-4 h-20 w-full md:h-28 ${showCloseComparison ? `rounded-tl-md rounded-tr-md md:rounded-bl-md md:rounded-tr-none` : `rounded-md`}`}
          style={{ backgroundColor: originalColor }}
        />
      </div>

      <div className="flex w-full flex-col-reverse md:flex-col">
        <p className="text-lg font-bold text-white">Tailwind Color</p>
        <p>Tailwind color class: {tailwindColor}</p>
        <div
          className={`h-20 w-full md:h-28 ${showCloseComparison ? `rounded-bl-md rounded-br-md md:mt-4 md:rounded-bl-none md:rounded-tr-md` : `mt-4 rounded-md`}`}
          style={{
            backgroundColor: findTailwindClassHexEquivalent(
              tailwindColor,
              originalColor
            ),
          }}
        />
      </div>
    </div>
  );
}

export default ColorComparison;
