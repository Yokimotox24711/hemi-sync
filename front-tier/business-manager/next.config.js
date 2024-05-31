/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
    reactStrictMode: false,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    typescript: {
        ignoreBuildErrors: true, //ignore typescript checks
    },
}

module.exports = nextConfig
