import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  use: {
    loader: '@svgr/webpack',
    options: {
     svgoConfig: {
      plugins: [
       {
         name: 'removeViewBox',
         active: false
       }
      ]
     }
    }
   }
};

export default nextConfig;
