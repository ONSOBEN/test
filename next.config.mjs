/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "i.pinimg.com",
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: "api.istad.co",
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: "upload.wikimedia.org",
                pathname: '**',
            },
            {
                protocol: 'https',
               hostname: "api.istad.co",
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: "static-00.iconduck.com",
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'encrypted-tbn0.gstatic.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'media.istockphoto.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'lms-api.istad.co',
                pathname: '**',
            },
            {
                protocol: 'http',
                hostname: "152.42.220.220",
                pathname: '**',
            },
        ],
    },
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://api.istad.co/:path*'
            }
        ]
    }
};

export default nextConfig;
