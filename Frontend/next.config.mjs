/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.nawy.com',
            port: '',
            pathname: '/_next/static/media/**',
          },
          {
            protocol: 'https',
            hostname: 'prod-images.cooingestate.com',
            port: '',
            pathname: '/processed/property_image/image/**',
          }
        ],
      },
    output: "standalone"
};

export default nextConfig;

  
