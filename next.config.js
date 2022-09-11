/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  pageExtensions: ['tsx'],
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/pt-BR',
        destination: '/',
        permanent: true,
      },
      {
        source: '/login',
        destination: '/',
        permanent: true,
      },
    ]
  },
}
