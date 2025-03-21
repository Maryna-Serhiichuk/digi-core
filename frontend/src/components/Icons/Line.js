import * as React from "react";
const SvgLine = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={2}
    fill="#E7BEB1"
    {...props}
  >
    <path d="M15 0H1a1 1 0 0 0 0 2h14a1 1 0 1 0 0-2" />
  </svg>
);
export default SvgLine;
