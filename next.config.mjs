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
  assetPrefix: '/.',
};

export default   nextConfig;
