"use client";
import React, { useState, useRef } from "react";
import namer, { type Color } from "color-namer";
import chroma from "chroma-js";
import colorToTailwindClass from "@/scripts/toTailwind";
import Popup from "./popup";
import ColorComparison from "./comparison";
import ColorPreview from "./preview";
import ColorCodesDisplay from "./colorCodeDisplay";
import { findTailwindClassHexEquivalent } from "@/scripts/fromTailwind";
import preprocessColor from "@/scripts/preprocessColor";

type ColorComponentProps = {
  type: string;
  placeholder: string;
};

export type Message = {
  message: string;
  status?: "success" | "error";
};

let timeoutId: ReturnType<typeof setTimeout>;

function ColorComponent({ type, placeholder }: ColorComponentProps) {
  const [inputColor, setInputColor] = useState(
    type === "to-tailwind" ? "#43e5a2" : "rose-600"
  );
  const displayedColorRef = useRef(
    type === "to-tailwind" ? "emerald-400" : "#E11D48"
  );
  const colorName = useRef(
    getColorName(type === "to-tailwind" ? "#43e5a2" : "#E11D48").name
  );
  const [copyMessage, setCopyMessage] = useState<Message>({ message: "" });
  const lastValidColor = useRef(type === "to-tailwind" ? "#43e5a2" : "#E11D48");
  const [showColorPreview, setShowColorPreview] = useState(false);
  const [showCloseComparison, setShowCloseComparison] = useState(false);
  const [popupOpened, setPopupOpened] = useState(false);

  function handleColorChange(event: React.ChangeEvent<HTMLInputElement>) {
    const color = event.target.value.toLowerCase();
    setInputColor(color);

    let colorCode = lastValidColor.current;
    let colorClass = lastValidColor.current;

    const newColor = preprocessColor(color);
    console.log("new color: ", newColor);
    console.log(chroma.valid(newColor));

    if (type === "to-tailwind" && chroma.valid(newColor)) {
      console.log("valid color");
      colorClass = colorToTailwindClass(newColor);
      colorCode = newColor;
    } else if (type === "from-tailwind") {
      colorCode = findTailwindClassHexEquivalent(
        newColor,
        lastValidColor.current
      );
      colorClass =
        colorCode && colorCode !== lastValidColor.current
          ? newColor
          : lastValidColor.current;
    }

    displayedColorRef.current = colorClass;
    colorName.current = getColorName(colorCode).name;
    lastValidColor.current = colorCode;
  }

  function handleColorCopy(color: string) {
    void (async (colorToCopy: string) => {
      let message = `Color copied successfully!`;
      try {
        await navigator.clipboard.writeText(colorToCopy);
        setCopyMessage((prev) => ({ ...prev, status: "success" }));
      } catch (error) {
        console.error("Failed to copy color:", error);
        setCopyMessage((prev) => ({ ...prev, status: "error" }));
        message = `Failed to copy color code!`;
      } finally {
        setCopyMessage((prev) => ({ ...prev, message: message }));
        togglePopup();
      }
    })(color);
  }

  function getColorName(colorCode: string): Color {
    if ((chroma.valid as (color: string) => boolean)(colorCode)) {
      const colorNames = namer(colorCode);
      return colorNames.ntc[0] || { name: "Unknown", hex: "", distance: -1 };
    } else {
      return { name: "Invalid", hex: "", distance: -1 };
    }
  }

  function showPreview() {
    setShowColorPreview((showColorPreview) => !showColorPreview);
  }

  function toggleCloseComparison() {
    setShowCloseComparison((showCloseComparison) => !showCloseComparison);
  }

  function togglePopup() {
    setPopupOpened(true);

    if (timeoutId) clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      console.log("closing popup");
      setPopupOpened(false);
    }, 4000);
  }

  return (
    <>
      <div className="mt-12 w-full rounded-md border border-neutral-700">
        <div className="relative flex w-full items-center justify-start bg-neutral-800 p-2">
          <input
            type="text"
            value={inputColor}
            placeholder={placeholder}
            onChange={handleColorChange}
            className="w-full rounded-md bg-neutral-900 p-2 text-neutral-300 sm:w-72"
          />
          {inputColor && (
            <button
              onClick={() => setInputColor("")}
              className="relative -left-7 h-6 w-6"
            >
              <svg
                className="m-auto"
                width="11"
                height="12"
                viewBox="0 0 10 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 1.50714L8.99286 0.5L5 4.49286L1.00714 0.5L0 1.50714L3.99286 5.5L0 9.49286L1.00714 10.5L5 6.50714L8.99286 10.5L10 9.49286L6.00714 5.5L10 1.50714Z"
                  fill="white"
                />
              </svg>
            </button>
          )}
        </div>
        <ColorPreview
          colorName={colorName.current}
          colorCode={displayedColorRef.current}
          lastValidColorCode={lastValidColor.current}
          onCopy={handleColorCopy}
          type={type}
        />
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {type === "to-tailwind" && (
          <button
            className="rounded-md bg-neutral-800 px-6 py-2.5 text-[15px] text-neutral-300 transition-all duration-200 ease-in-out hover:bg-neutral-700 sm:mt-3"
            onClick={showPreview}
          >
            {!showColorPreview ? "Show color preview" : "Hide color preview"}
          </button>
        )}

        {type === "to-tailwind" && showColorPreview && (
          <button
            className="rounded-md bg-neutral-800 px-6 py-2.5 text-[15px] text-neutral-300 transition-all duration-200 ease-in-out hover:bg-neutral-700 sm:mt-3"
            onClick={toggleCloseComparison}
          >
            {!showCloseComparison ? "Compare closely" : "Regular comparison"}
          </button>
        )}
      </div>

      {type === "from-tailwind" && (
        <ColorCodesDisplay
          copyFunc={handleColorCopy}
          hexColor={lastValidColor.current}
        />
      )}

      {
        <Popup
          message={copyMessage.message}
          status={copyMessage.status}
          popupOpened={popupOpened}
        />
      }

      {showColorPreview && (
        <ColorComparison
          originalColor={lastValidColor.current}
          tailwindColor={displayedColorRef.current}
          showCloseComparison={showCloseComparison}
        />
      )}
    </>
  );
}

export default ColorComponent;
