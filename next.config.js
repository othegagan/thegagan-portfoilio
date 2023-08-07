const nextConfig = {
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ["@svgr/webpack"],
        });

        return config;
    },
};

const experimentalOptions = {
    experimental: {
        images: {
            allowFutureImage: true,
        },
    },
};

module.exports = {
    ...nextConfig,
    ...experimentalOptions,
};
