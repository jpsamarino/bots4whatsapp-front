/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  exclude: [
    /__tests__/,
    /stories/,
    /\.(spec|test)\.[jt]sx?$/,
    /\.test\.[jt]sx?$/,
  ],
  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,

  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
};

module.exports = nextConfig;
