/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  webpack(config, {}) {
    config.resolve.alias["@api"] = path.join(__dirname, "./services/api.ts");
    config.resolve.alias["@theme"] = path.join(__dirname, "./lib/theme.ts");
    config.resolve.alias["@static"] = path.join(__dirname, "./public/static");
    config.resolve.alias["@models"] = path.join(__dirname, "./models");
    config.resolve.alias["@utils"] = path.join(__dirname, "./lib/utils");
    config.resolve.alias["@components"] = path.join(__dirname, "./components");
    config.resolve.alias["@ui"] = path.join(__dirname, "./ui");
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
  env: {
    API_URL_PROD: "https://backend-ml.azurewebsites.net",
    API_URL_DEV: "http://localhost:3005",
  },
  images: {
    unoptimized: true,
    domains: ["http2.mlstatic.com"],
  },
};

module.exports = nextConfig;
