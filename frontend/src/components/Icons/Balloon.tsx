import * as React from "react";
import type { SVGProps } from "react";
const SvgBalloon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="#CE7D63"
    viewBox="0 0 34 34"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M27.625 13.544c.047 5.868-4.843 11.295-10.71 11.248-5.869-.048-10.492-5.552-10.54-11.42a10.42 10.42 0 0 1 10.54-10.538c5.867.047 10.662 4.842 10.71 10.71m-9.908-6.106a1.062 1.062 0 1 0-.017 2.124 3.237 3.237 0 0 1 3.196 3.197 1.062 1.062 0 1 0 2.125-.018 5.36 5.36 0 0 0-5.304-5.303"
      clipRule="evenodd"
    />
    <path d="M20.07 25.804c.47 1.505-.505 3.02-2.007 3.325v2.037a1.063 1.063 0 0 1-2.125 0V29.13c-1.503-.305-2.478-1.82-2.008-3.325l.01-.03a10.973 10.973 0 0 0 6.12-.003z" />
  </svg>
);
export default SvgBalloon;
