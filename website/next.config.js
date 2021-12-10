/** @type {import('next').NextConfig} */
module.exports = {
  webpack: (config, { webpack }) => {
    config.plugins.push(new webpack.IgnorePlugin({
      resourceRegExp: /^electron$/
    }))
    return config
  },
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'cryptodicks-api.herokuapp.com']
  }
}
