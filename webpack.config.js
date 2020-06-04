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
    ],
    devServer: {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      }
    }
  }
};
