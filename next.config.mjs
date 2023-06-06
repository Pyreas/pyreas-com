/**
   * @type {import('next').NextConfig}
   */
const nextConfig   = {
  output: 'export',
  images: {
    loader: 'akamai',
    path: '/.',
  },
  // basePath: '/pyreas-com',
  assetPrefix: '/pyreas-com/',
};

export default   nextConfig;
