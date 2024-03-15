/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { isServer }) => {
        // Add file-loader for font files
        config.module.rules.push({
            test: /\.(woff2|woff|ttf|otf|eot)$/,
            use: {
                loader: 'file-loader',
                options: {
                    publicPath: '/_next/static/fonts/',
                    outputPath: `${isServer ? '../' : ''}static/fonts/`,
                    name: '[name]-[hash].[ext]',
                },
            },
        });

        return config;
    }
};

export default nextConfig;
