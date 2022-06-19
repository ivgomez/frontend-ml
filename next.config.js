/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  webpack(config, {}) {
    config.resolve.alias["@theme"] = path.join(__dirname, "./lib/theme.ts");
    config.resolve.alias["@static"] = path.join(__dirname, "./public/static");
    config.resolve.alias["@components"] = path.join(__dirname, "./components");
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf)$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 100000,
          name: "[name].[ext]",
        },
      },
    });
    return config;
  },
};

module.exports = nextConfig;
