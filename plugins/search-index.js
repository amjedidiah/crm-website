const {
  getAllPosts,
  generateIndexSearch,
  updateWatchOptionsIgnoredPaths,
} = require("./util");

const WebpackPluginCompiler = require("./plugin-compiler");

module.exports = function indexSearch(nextConfig = {}) {
  const { env, outputDirectory, outputName, verbose = false } = nextConfig;

  const plugin = {
    name: "SearchIndex",
    outputDirectory: outputDirectory || "./public",
    outputName: outputName || "wp-search.json",
    getData: getAllPosts,
    generate: generateIndexSearch,
  };

  const { WORDPRESS_GRAPHQL_ENDPOINT } = env;

  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      if (config.watchOptions) updateWatchOptionsIgnoredPaths(config, plugin);

      config.plugins.push(
        new WebpackPluginCompiler({
          url: WORDPRESS_GRAPHQL_ENDPOINT,
          plugin,
          verbose,
        })
      );

      if (typeof nextConfig.webpack === "function") {
        return nextConfig.webpack(config, options);
      }

      return config;
    },
  });
};
