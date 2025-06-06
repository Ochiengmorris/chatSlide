import React from "react";

function HelpDTBlue({ color }: { color?: string }) {
  return (
    <svg
      fill={color || "currentColor"}
      width={24}
      height={24}
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <title>help</title>{" "}
        <path d="M16 1c-8.285 0-15 6.716-15 15s6.715 15 15 15 15-6.716 15-15-6.715-15-15-15zM16 4.75c6.213 0 11.25 5.037 11.25 11.25s-5.037 11.25-11.25 11.25-11.25-5.037-11.25-11.25c0.001-6.213 5.037-11.25 11.25-11.25zM16 6.625c-4.142 0-7.5 2.518-7.5 5.625 0 1.875 3.75 1.875 3.75 0 0-1.035 1.679-1.875 3.75-1.875s3.75 0.839 3.75 1.875c0 1.035-1.875 0.937-3.75 1.875-0.117 0.059-0.217 0.133-0.293 0.206-1.549 0.981-1.582 2.665-1.582 3.545v0.937c0 1.038 0.836 1.875 1.875 1.875s1.875-0.836 1.875-1.875v-0.937c0-2.813 5.625-2.518 5.625-5.625s-3.357-5.626-7.5-5.626zM16 21.625c1.035 0 1.875 0.839 1.875 1.875s-0.839 1.875-1.875 1.875c-1.035 0-1.875-0.839-1.875-1.875s0.84-1.875 1.875-1.875z"></path>
      </g>
    </svg>
  );
}

export default HelpDTBlue;
