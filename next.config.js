module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: 'https://zevallosandro.gumroad.com/l/xdwnjt',
        permanent: false, // 302 redirect
      },
      {
        source: '/index.html',
        destination: 'https://zevallosandro.gumroad.com/l/xdwnjt',
        permanent: false,
      }
    ];
  },
};
