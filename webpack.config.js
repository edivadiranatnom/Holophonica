module.exports = {
  module: {
    entry: "./src/main.js",
    rules: [
      {
        test: /\.scss$/,
        use: [
          "vue-style-loader",
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              data: "@import '@/styles/variables.scss';",
              prependData: "@import '@/styles/variables.scss';"
            }
          }
        ]
      }
    ]
  }
};
