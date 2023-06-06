/**
   * @type {import('next').NextConfig}
   */
const nextConfig   = {
  output: 'export',
  images: {
    loader: 'akamai',
    path: '/pyreas-com',
  },
  basePath: '/pyreas-com',
  assetPrefix: '/pyreas-com/',
};

export default   nextConfig;
