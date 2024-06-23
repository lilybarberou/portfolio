const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
});

module.exports = withPWA({
  images: {
    remotePatterns: [{ hostname: 'api.lilybarberou.fr' }, { hostname: 'raw.githubusercontent.com' }],
  },
  compiler: {
    styledComponents: true,
  },
});
