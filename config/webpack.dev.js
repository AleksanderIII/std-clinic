const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HTMLInlineCSSWebpackPlugin = require('html-inline-css-webpack-plugin')
  .default

module.exports = {
  entry: {
    home: './src/index.js',
    chlomydia: './src/diseases/Chlomydia/index.js',
    chlomydiaWhatISee: './src/diseases/Chlomydia/WhatISee/whatIsee.js',
    chlomydiaWhatIFeel: './src/diseases/Chlomydia/WhatIFeel/whatIfeel.js',
    chlomydiaOdds: './src/diseases/Chlomydia/Odds/odds.js',
    chlomydiaTesting: './src/diseases/Chlomydia/Testing/testing.js',
    chlomydiaTestingAlgorithms: './src/diseases/Chlomydia/TestingAlgorithms/testing_algorithms.js',
    chlomydiaTreatments: './src/diseases/Chlomydia/Treatments/treatments.js',
    chlomydiaTreatmentAlgorithms: './src/diseases/Chlomydia/TreatmentsAlgorithms/treatment_algorithms.js',
    chlomydiaVsOther: "./src/diseases/Chlomydia/ChlomydiaVsOther/chlomydiaVsOther.js",
    chlomydiaVsGonorrhea: "./src/diseases/Chlomydia/ChlomydiaVsGonorrhea/chlomydiaVsGonorrhea.js",
    chlomydiaVsVaginosis: "./src/diseases/Chlomydia/ChlomydiaVsVaginosis/chlomydiaVsVaginosis.js",
    chlomydiaVsYeast: "./src/diseases/Chlomydia/ChlomydiaVsYeast/chlomydiaVsYeast.js",
    chlomydiaProtecting: "./src/diseases/Chlomydia/Protecting/protecting.js",
    chlomydiaMyths: "./src/diseases/Chlomydia/Myths/myths.js",
    gonorrhea: "./src/diseases/Gonorrhea/gonorrhea.js",
    gonorrheaWhatISee: './src/diseases/Gonorrhea/WhatISee/whatIsee.js',
    gonorrheaWhatIFeel: './src/diseases/Gonorrhea/WhatIFeel/whatIfeel.js',
    gonorrheaOdds: './src/diseases/Gonorrhea/Odds/odds.js',
    gonorrheaTesting: './src/diseases/Gonorrhea/Testing/testing.js',
    gonorrheaTestingAlgorithms: './src/diseases/Gonorrhea/TestingAlgorithms/testing_algorithms.js',
    gonorrheaTreatments: './src/diseases/Gonorrhea/Treatments/treatments.js',
    gonorrheaTreatmentAlgorithms: './src/diseases/Gonorrhea/TreatmentsAlgorithms/treatment_algorithms.js',
    gonorrheaVsOther: "./src/diseases/Gonorrhea/GonorrheaVsOther/gonorrheaVsOther.js",
    gonorrheaVsChlomydia: "./src/diseases/Gonorrhea/GonorrheaVsChlomydia/gonorrheaVsChlomydia.js",
    gonorrheaVsVaginosis: "./src/diseases/Gonorrhea/GonorrheaVsVaginosis/gonorrheaVsVaginosis.js",
    gonorrheaProtecting: "./src/diseases/Gonorrhea/Protecting/protecting.js",
    gonorrheaMyths: "./src/diseases/Gonorrhea/Myths/myths.js",
  },
  output: {
    path: path.join(__dirname, '../build'),
    filename: '[name].bundle.js'
  },
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, '../build'),
    compress: true,
    port: 3000,
    overlay: true
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader' // transpiling our JavaScript files using Babel and webpack
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(less)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader'
          },
          {
            loader: 'less-loader'
          }
        ]
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/'
            }
          }
        ]
      },
      {
        test: /\.html\$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: ['a'],
            minimize: true
          }
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: true,
      chunks: ['home']
    }),
    new HtmlWebpackPlugin({
      template: './src/diseases/Chlomydia/chlomydia.html',
      filename: 'chlomydia.html',
      inject: true,
      chunks: ['chlomydia']
    }),
    new HtmlWebpackPlugin({
      template: './src/diseases/Chlomydia/WhatISee/WhatISee.html',
      filename: 'chlomydia/what_i_see.html',
      inject: true,
      chunks: ['chlomydiaWhatISee']
    }),
    new HtmlWebpackPlugin({
      template: './src/diseases/Chlomydia/WhatIFeel/WhatIFeel.html',
      filename: 'chlomydia/what_i_feel.html',
      inject: true,
      chunks: ['chlomydiaWhatIFeel']
    }),
    new HtmlWebpackPlugin({
      template: './src/diseases/Chlomydia/Odds/Odds.html',
      filename: 'chlomydia/odds.html',
      inject: true,
      chunks: ['chlomydiaOdds']
    }),
    new HtmlWebpackPlugin({
      template: './src/diseases/Chlomydia/Testing/Testing.html',
      filename: 'chlomydia/testing.html',
      inject: true,
      chunks: ['chlomydiaTesting']
    }),
    new HtmlWebpackPlugin({
      template: './src/diseases/Chlomydia/TestingAlgorithms/TestingAlgorithms.html',
      filename: 'chlomydia/testing_algorithms.html',
      inject: true,
      chunks: ['chlomydiaTestingAlgorithms']
    }),
    new HtmlWebpackPlugin({
      template: './src/diseases/Chlomydia/Treatments/Treatments.html',
      filename: 'chlomydia/treatments.html',
      inject: true,
      chunks: ['chlomydiaTreatments']
    }),
    new HtmlWebpackPlugin({
      template: './src/diseases/Chlomydia/TreatmentsAlgorithms/TreatmentsAlgorithms.html',
      filename: 'chlomydia/treatment_algorithms.html',
      inject: true,
      chunks: ['chlomydiaTreatmentAlgorithms']
    }),
    new HtmlWebpackPlugin({
      template: './src/diseases/Chlomydia/ChlomydiaVsOther/ChlomydiaVsOther.html',
      filename: 'chlomydia/chlomydia_vs_other.html',
      inject: true,
      chunks: ['chlomydiaVsOther']
    }),
    new HtmlWebpackPlugin({
      template: './src/diseases/Chlomydia/ChlomydiaVsGonorrhea/ChlomydiaVsGonorrhea.html',
      filename: 'chlomydia/chlomydia_vs_gonorrhea.html',
      inject: true,
      chunks: ['chlomydiaVsGonorrhea']
    }),
    new HtmlWebpackPlugin({
      template: './src/diseases/Chlomydia/ChlomydiaVsVaginosis/ChlomydiaVsVaginosis.html',
      filename: 'chlomydia/chlomydia_vs_vaginosis.html',
      inject: true,
      chunks: ['chlomydiaVsVaginosis']
    }),
    new HtmlWebpackPlugin({
      template: './src/diseases/Chlomydia/ChlomydiaVsYeast/ChlomydiaVsYeast.html',
      filename: 'chlomydia/chlomydia_vs_yeast.html',
      inject: true,
      chunks: ['chlomydiaVsYeast']
    }),
    new HtmlWebpackPlugin({
      template: './src/diseases/Chlomydia/Protecting/Protecting.html',
      filename: 'chlomydia/protecting.html',
      inject: true,
      chunks: ['chlomydiaProtecting']
    }),
    new HtmlWebpackPlugin({
      template: './src/diseases/Chlomydia/Myths/Myths.html',
      filename: 'chlomydia/myths.html',
      inject: true,
      chunks: ['chlomydiaMyths']
    }),
    new HtmlWebpackPlugin({
      template: './src/diseases/Gonorrhea/Gonorrhea.html',
      filename: 'gonorrhea.html',
      inject: true,
      chunks: ['gonorrhea']
    }),
    new HtmlWebpackPlugin({
      template: './src/diseases/Gonorrhea/WhatISee/WhatISee.html',
      filename: 'gonorrhea/what_i_see.html',
      inject: true,
      chunks: ['gonorrheaWhatISee']
    }),
    new HtmlWebpackPlugin({
      template: './src/diseases/Gonorrhea/WhatIFeel/WhatIFeel.html',
      filename: 'gonorrhea/what_i_feel.html',
      inject: true,
      chunks: ['gonorrheaWhatIFeel']
    }),
    new HtmlWebpackPlugin({
      template: './src/diseases/Gonorrhea/Odds/Odds.html',
      filename: 'gonorrhea/odds.html',
      inject: true,
      chunks: ['gonorrheaOdds']
    }),
    new HtmlWebpackPlugin({
      template: './src/diseases/Gonorrhea/Testing/Testing.html',
      filename: 'gonorrhea/testing.html',
      inject: true,
      chunks: ['gonorrheaTesting']
    }),
    new HtmlWebpackPlugin({
      template: './src/diseases/Gonorrhea/TestingAlgorithms/TestingAlgorithms.html',
      filename: 'gonorrhea/testing_algorithms.html',
      inject: true,
      chunks: ['gonorrheaTestingAlgorithms']
    }),
    new HtmlWebpackPlugin({
      template: './src/diseases/Gonorrhea/Treatments/Treatments.html',
      filename: 'gonorrhea/treatments.html',
      inject: true,
      chunks: ['gonorrheaTreatments']
    }),
    new HtmlWebpackPlugin({
      template: './src/diseases/Gonorrhea/TreatmentsAlgorithms/TreatmentsAlgorithms.html',
      filename: 'gonorrhea/treatment_algorithms.html',
      inject: true,
      chunks: ['gonorrheaTreatmentAlgorithms']
    }),
    new HtmlWebpackPlugin({
      template: './src/diseases/Gonorrhea/GonorrheaVsOther/GonorrheaVsOther.html',
      filename: 'gonorrhea/gonorrhea_vs_other.html',
      inject: true,
      chunks: ['gonorrheaVsOther']
    }),
    new HtmlWebpackPlugin({
      template: './src/diseases/Gonorrhea/GonorrheaVsChlomydia/GonorrheaVsChlomydia.html',
      filename: 'gonorrhea/gonorrhea_vs_chlomydia.html',
      inject: true,
      chunks: ['gonorrheaVsChlomydia']
    }),
    new HtmlWebpackPlugin({
      template: './src/diseases/Gonorrhea/GonorrheaVsVaginosis/GonorrheaVsVaginosis.html',
      filename: 'gonorrhea/gonorrhea_vs_vaginosis.html',
      inject: true,
      chunks: ['gonorrheaVsVaginosis']
    }),
    new HtmlWebpackPlugin({
      template: './src/diseases/Gonorrhea/Protecting/Protecting.html',
      filename: 'gonorrhea/protecting.html',
      inject: true,
      chunks: ['gonorrheaProtecting']
    }),
    new HtmlWebpackPlugin({
      template: './src/diseases/Gonorrhea/Myths/Myths.html',
      filename: 'gonorrhea/myths.html',
      inject: true,
      chunks: ['gonorrheaMyths']
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new HTMLInlineCSSWebpackPlugin()
  ]
}
