import React from "react";
import { getColorCodes, type ColorCodes } from "@/scripts/fromTailwind";

type ColorCodesDisplayProps = {
  hexColor: string;
  copyFunc: (color: string) => void;
};

function ColorCodesDisplay({ hexColor, copyFunc }: ColorCodesDisplayProps) {
  const colorCodes: ColorCodes = getColorCodes(hexColor);

  const colorCodesArray = Object.entries(colorCodes).map(([key, value]) => ({
    name: key.toUpperCase(),
    value,
  }));

  return (
    <div className="mx-auto mt-10 max-w-5xl rounded-md border border-neutral-700 bg-neutral-900 text-neutral-300 lg:mt-16">
      <div className="border-b border-b-neutral-700 px-5 py-3.5 text-white">
        Color code conversions
      </div>
      <div className="grid gap-y-4 px-5 py-6 md:grid-cols-2 md:gap-x-12">
        {colorCodesArray.map((code) => (
          <div
            className="flex justify-between"
            key={code.name}
            onClick={() => {
              copyFunc(code.value);
            }}
          >
            <p className="cursor-pointer">
              <span className="font-bold">{code.name}:</span> {code.value}
            </p>
            <svg
              className="hidden cursor-pointer sm:block"
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <title>Copy color</title>
              <rect x="9" y="9" width="10" height="10" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ColorCodesDisplay;
