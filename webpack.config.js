const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  target: 'web',
  entry: {
    default: "./src/layouts/default/default.js",
    index: "./src/index.js",
    error: "./src/pages/404.js"
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'docs'),
    clean: true,
    assetModuleFilename: (pathData) => {
      const filepath = path
      .dirname(pathData.filename)
      .split("/")
      .slice(1)
      .join("/");
      return `${filepath}/[name][ext]`;
    },
  },
  devServer: {
    compress: true,
    static: {
      directory: path.join(__dirname, 'src'),
      watch: true,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.pug',
      filename: 'index.html',
      chunks: ["default", "index"]  
    }),
    new HtmlWebpackPlugin({
      template: './src/pages/404.pug',
      filename: '404.html',
      chunks: ["default", "error"]  
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    }),
    new MiniCssExtractPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        options: {
          pretty: true
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,       // Creates `style` nodes from JS strings
          "css-loader",                      // Translates CSS into CommonJS
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "autoprefixer",
                  ],
                ],
              },
            },
          },
          "sass-loader",                     // Compiles Sass to CSS
        ],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        type: 'asset/resource',
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
        type: 'asset/resource',
      },
    ]
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
    //minimize: true,         //Turn on if need minimizing in dev mode
  },
};