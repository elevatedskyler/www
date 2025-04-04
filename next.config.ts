import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		domains: [],
		remotePatterns: [],
	},
	transpilePackages: ["geist"],
	eslint: {
		ignoreDuringBuilds: true,
	},
};

export default nextConfig;
