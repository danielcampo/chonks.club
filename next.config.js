/** @type {import('next').NextConfig} */

const ContentSecurityPolicy = `
  connect-src 'self' *.google-analytics.com *.analytics.google.com *.googletagmanager.com;
  default-src 'self';
  font-src 'self' fonts.gstatic.com;style-src 'self' fonts.googleapis.com;
  img-src 'self' *.google-analytics.com *.googletagmanager.com data: w3.org/svg/2000;
  script-src 'self' 'unsafe-inline' *.googletagmanager.com;
  style-src-attr 'self' 'unsafe-inline';
`;

module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'Content-Security-Policy',
            value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  reactStrictMode: true,
};
