/* eslint-disable @typescript-eslint/no-var-requires */
const createNextIntlPlugin = require('next-intl/plugin')

const withNextIntl = createNextIntlPlugin()

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['source.unsplash.com', 'images.unsplash.com', 'preview.colorlib.com'],
  },
}

module.exports = withNextIntl(nextConfig)
