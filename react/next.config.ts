import type { NextConfig } from "next";
import CopyWebpackPlugin from "copy-webpack-plugin";

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    // Only apply the plugin for client-side builds
    if (!isServer) {
      config.plugins.push(
        new CopyWebpackPlugin({
          patterns: [
            {
              from: "../../design-systems/packages/mercury/dist/bundles/css",
              to: "public/assets/css/",
            },
            {
              from: "../../design-systems/packages/mercury/dist/assets/fonts",
              to: "public/assets/fonts/",
            },
            {
              from: "../../design-systems/packages/mercury/dist/assets/icons",
              to: "public/assets/icons/",
            },
            {
              from: "../../design-systems/packages/mercury/dist",
              to: "",
            },
          ],
        })
      );
    }

    return config;
  },
};

export default nextConfig;
