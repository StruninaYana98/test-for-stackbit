const debug = process.env.NODE_ENV !== "production";
//const withPlugins = require('next-compose-plugins');
//const optimizedImages = require('next-optimized-images');

module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  assetPrefix: !debug ? 'https://literate-waffle-72a4c643.pages.github.io/' : '',
}

