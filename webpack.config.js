const path = require("path");

module.exports = {
  entry: "./server.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  resolve: {
    fallback: {
      crypto: require.resolve("crypto-browserify"),
      querystring: require.resolve("querystring-es3"),
      zlib: require.resolve("browserify-zlib"),
      http: require.resolve("stream-http"),
      os: require.resolve("os-browserify/browser"),
      path: require.resolve('path-browserify'),
      stream: require.resolve('stream-browserify'),
      assert: require.resolve('assert/'),
      vm: require.resolve('vm-browserify'),
      vm: require.resolve('async_hooks'),
      fs: false, // If you don't need fs module
      net: false, // If you don't need net module
    },
  },
};
