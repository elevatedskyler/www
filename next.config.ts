import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		domains: [],
		remotePatterns: [],
	},
	transpilePackages: ["geist"],
};

export default nextConfig;
