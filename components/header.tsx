/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="h-16 w-screen px-8 md:h-24">
      <div className="mx-auto flex h-full w-full max-w-[1200px] items-center justify-between">
        <Link
          href={"/"}
          className="bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 bg-clip-text text-[22px] font-bold text-transparent"
          style={{
            backgroundSize: "200% 200%",
            animation: "gradient-animation 5s ease-in-out infinite",
          }}
        >
          tailwindmate
        </Link>
        <Link
          href="https://www.producthunt.com/posts/tailwindmate?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-tailwindmate"
          target="_blank"
          className="hidden sm:block"
        >
          {/* Image component not used because of error "dangerouslyAllowSVG is disabled" */}
          <img
            src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=403477&theme=light"
            alt="Tailwindmate - Converting&#0032;CSS&#0032;colors&#0032;to&#0032;Tailwind&#0032;and&#0032;back&#0044;&#0032;effortlessly&#0046; | Product Hunt"
            style={{
              width: "180px",
              height: "40px",
            }}
            width="250"
            height="54"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
