const withPWA = require('next-pwa')({
    dest: 'public',
});

module.exports = withPWA({
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        });

        return config;
    },
    swcMinify: true,
    reactStrictMode: true,
    images: {
        domains: ['raw.githubusercontent.com'],
    },
});
