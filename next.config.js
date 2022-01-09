module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/contact/:path",
        destination: "/form/:path",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`,
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${process.env.API_KEY}`,
      },
    ];
  },
};
