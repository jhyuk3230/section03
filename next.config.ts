import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  logging: {
		fetches: {
			fullUrl: true,
		}
	}
};

module.exports = {
  images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'shopping-phinf.pstatic.net',
				pathname: '**'
			}
		],
    // domains: ['shopping-phinf.pstatic.net'],
  },
};

export default nextConfig;
