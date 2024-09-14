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
};

export default nextConfig;
