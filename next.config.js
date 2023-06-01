/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  },
  async redirects() {
    return [
      {
        source: "/support",
        destination: "https://discord.gg/YGXJbuz44K",
        permanent: true
      },
      {
        source: "/discord",
        destination: "https://discord.gg/YGXJbuz44K",
        permanent: true
      },
      {
        source: "/github",
        destination: "https://github.com/arconnectio",
        permanent: true
      },
      {
        source: "/twitter",
        destination: "https://twitter.com/arconnectio",
        permanent: true
      },
      {
        source: "/pp",
        destination: "/privacy",
        permanent: true
      },
      {
        source: "/docs",
        destination: "https://docs.arconnect.io",
        permanent: true
      }
    ];
  }
};

module.exports = nextConfig;
