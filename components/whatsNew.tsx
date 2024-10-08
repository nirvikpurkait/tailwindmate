"use client";

import React, { useState } from "react";

export default function WhatsNew({ detaiils }: { detaiils: React.ReactNode }) {
  const [whatsNewOpened, setWhatsNewOpened] = useState(false);

  function toggleWhatsNewStatus() {
    setWhatsNewOpened(!whatsNewOpened);
  }

  return (
    <div className="mt-12 w-full rounded-md border border-neutral-700 lg:mt-20">
      <button
        onClick={toggleWhatsNewStatus}
        className={`flex w-full items-center justify-between border-b-neutral-700 px-5 py-3.5 text-white ${whatsNewOpened ? "border-b" : "border-0"}`}
      >
        What&apos;s new
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`size-4 transition-all ${whatsNewOpened ? "rotate-0" : "rotate-180"}`}
          viewBox="0 0 512 512"
          fill="none"
        >
          <path
            d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"
            fill="currentColor"
          />
        </svg>
      </button>
      <div
        className={`relative bottom-0 w-full overflow-clip px-5 text-white transition-all ${whatsNewOpened ? "h-max py-3.5" : "h-0"}`}
      >
        {detaiils}
      </div>
    </div>
  );
}
