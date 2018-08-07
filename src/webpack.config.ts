import ExtractTextPlugin from "extract-text-webpack-plugin";

export default {
  entry: "./src/assets/styles/main.scss",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            {
              loader: "css-loader",
              options: {
                minimize: true,
                sourceMap: true,
                url: false
              }
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true
              }
            }
          ]
        })
      }
    ]
  },
  plugins: [new ExtractTextPlugin("stylesheets/main.css")]
};
