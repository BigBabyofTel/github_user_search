import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
                // Optionally, add these for more control:
                port: '',
                pathname: '/**',
            },
        ]
    }
};

export default nextConfig;
