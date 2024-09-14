const nextConfig = {
  sassOptions: {
    includePaths: ['./src/styles'],
  },
  env: {
    HOST: process.env.HOST, 
  },
  images: {
    domains: ['oblakoz.ru'],
  },
  reactStrictMode: true,
  output: 'standalone',
};

export default nextConfig;
