/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['tailwindui.com', 'images.unsplash.com', 'ui-avatars.com', 'placeimg.com']
  },
  /*eslint: {    con esto evitas que al hacer build los errores o warning los evita y asi puedes subirlo a produccion pero con warning
    ignoreDuringBuilds: true,
  },*/
};

module.exports = nextConfig;
