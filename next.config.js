/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withReactSvg = require('next-react-svg')

module.exports = withReactSvg({
  include: path.resolve(__dirname, 'assets/svg'),
  webpack(config) {
    return config
  }
})
