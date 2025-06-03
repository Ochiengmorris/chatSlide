import React from "react";

interface Props {
  color?: string;
  size?: number;
  strokeWidth?: number;
  className?: string;
}

const Spinner = ({
  color = "#3b82f6",
  size = 24,
  strokeWidth = 2.5,
  className = "",
}: Props) => {
  return (
    <svg
      className={`animate-spin ${className}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray="31.416"
        strokeDashoffset="31.416"
        opacity="0.2"
      />
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray="31.416"
        strokeDashoffset="23.562"
        className="animate-spin"
        style={{
          transformOrigin: "center",
          animation: "spin 1s linear infinite",
        }}
      />
    </svg>
  );
};

export default Spinner;
