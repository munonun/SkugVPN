import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',  // ✅ 이거 추가
  reactStrictMode: true,
};

export default nextConfig;
