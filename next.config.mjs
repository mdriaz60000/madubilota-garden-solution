/** @type {import('next').NextConfig} */
const nextConfig = {
  
        images: {
          remotePatterns: [
            {
              protocol: 'https',
              hostname: 'static.wixstatic.com',
              port: '',
              pathname: '/media/**',
            },
            {
              protocol: 'https',
              hostname: 'img.freepik.com',
              port: '',
              pathname: '/premium-photo/**',
              pathname: '/free-photo/**',
            },
          ],
        },
};

export default nextConfig;
