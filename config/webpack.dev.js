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
    chlomydiaTestingAlgorithms:
      './src/diseases/Chlomydia/TestingAlgorithms/testing_algorithms.js',
    chlomydiaTreatments: './src/diseases/Chlomydia/Treatments/treatments.js',
    chlomydiaTreatmentAlgorithms:
      './src/diseases/Chlomydia/TreatmentsAlgorithms/treatment_algorithms.js',
    chlomydiaVsOther:
      './src/diseases/Chlomydia/ChlomydiaVsOther/chlomydiaVsOther.js',
    chlomydiaVsGonorrhea:
      './src/diseases/Chlomydia/ChlomydiaVsGonorrhea/chlomydiaVsGonorrhea.js',
    chlomydiaVsVaginosis:
      './src/diseases/Chlomydia/ChlomydiaVsVaginosis/chlomydiaVsVaginosis.js',
    chlomydiaVsYeast:
      './src/diseases/Chlomydia/ChlomydiaVsYeast/chlomydiaVsYeast.js',
    chlomydiaProtecting: './src/diseases/Chlomydia/Protecting/protecting.js',
    chlomydiaMyths: './src/diseases/Chlomydia/Myths/myths.js',

    gonorrhea: './src/diseases/Gonorrhea/gonorrhea.js',
    gonorrheaWhatISee: './src/diseases/Gonorrhea/WhatISee/whatIsee.js',
    gonorrheaWhatIFeel: './src/diseases/Gonorrhea/WhatIFeel/whatIfeel.js',
    gonorrheaOdds: './src/diseases/Gonorrhea/Odds/odds.js',
    gonorrheaTesting: './src/diseases/Gonorrhea/Testing/testing.js',
    gonorrheaTestingAlgorithms:
      './src/diseases/Gonorrhea/TestingAlgorithms/testing_algorithms.js',
    gonorrheaTreatments: './src/diseases/Gonorrhea/Treatments/treatments.js',
    gonorrheaTreatmentAlgorithms:
      './src/diseases/Gonorrhea/TreatmentsAlgorithms/treatment_algorithms.js',
    gonorrheaVsOther:
      './src/diseases/Gonorrhea/GonorrheaVsOther/gonorrheaVsOther.js',
    gonorrheaVsChlomydia:
      './src/diseases/Gonorrhea/GonorrheaVsChlomydia/gonorrheaVsChlomydia.js',
    gonorrheaVsVaginosis:
      './src/diseases/Gonorrhea/GonorrheaVsVaginosis/gonorrheaVsVaginosis.js',
    gonorrheaProtecting: './src/diseases/Gonorrhea/Protecting/protecting.js',
    gonorrheaMyths: './src/diseases/Gonorrhea/Myths/myths.js',

    herpes: './src/diseases/Herpes/herpes.js',
    herpesOverview: './src/diseases/Herpes/Overview/overview.js',
    herpesWhatISee: './src/diseases/Herpes/WhatISee/whatIsee.js',
    herpesWhatIFeel: './src/diseases/Herpes/WhatIFeel/whatIfeel.js',
    herpesOdds: './src/diseases/Herpes/Odds/odds.js',
    herpesTesting: './src/diseases/Herpes/Testing/testing.js',
    herpesTestingAlgorithms:
      './src/diseases/Herpes/TestingAlgorithms/testing_algorithms.js',
    herpesTreatments: './src/diseases/Herpes/Treatments/treatments.js',
    herpesTreatmentAlgorithms:
      './src/diseases/Herpes/TreatmentsAlgorithms/treatment_algorithms.js',
    herpesProtecting: './src/diseases/Herpes/Protecting/protecting.js',
    herpesVsOther: './src/diseases/Herpes/Comparision/comparision.js',
    herpesVsSyphilis:
      './src/diseases/Herpes/HerpesVsSyphilis/herpesVsSyphilis.js',
    herpesVsBalanitis:
      './src/diseases/Herpes/HerpesVsBalanitis/herpesVsBalanitis.js',
    herpesVsYeast: './src/diseases/Herpes/HerpesVsYeast/herpesVsYeast.js',
    herpesMyths: './src/diseases/Herpes/Myths/myths.js',

    hiv: './src/diseases/HIV/hiv.js',
    hivSigns: './src/diseases/HIV/Signs/signs.js',
    hivOdds: './src/diseases/HIV/Odds/odds.js',
    hivTesting: './src/diseases/HIV/Testing/testing.js',
    hivRapidTests: './src/diseases/HIV/RapidTests/rapidTests.js',
    hivPrEP: './src/diseases/HIV/PrEP/prep.js',
    hivPEP: './src/diseases/HIV/PEP/pep.js',
    HIVVsOther: './src/diseases/HIV/HIVVsOther/hivVsOther.js',
    hivProtecting: './src/diseases/HIV/Protecting/protecting.js'
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
      template:
        './src/diseases/Chlomydia/TestingAlgorithms/TestingAlgorithms.html',
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
      template:
        './src/diseases/Chlomydia/TreatmentsAlgorithms/TreatmentsAlgorithms.html',
      filename: 'chlomydia/treatment_algorithms.html',
      inject: true,
      chunks: ['chlomydiaTreatmentAlgorithms']
    }),
    new HtmlWebpackPlugin({
      template:
        './src/diseases/Chlomydia/ChlomydiaVsOther/ChlomydiaVsOther.html',
      filename: 'chlomydia/chlomydia_vs_other.html',
      inject: true,
      chunks: ['chlomydiaVsOther']
    }),
    new HtmlWebpackPlugin({
      template:
        './src/diseases/Chlomydia/ChlomydiaVsGonorrhea/ChlomydiaVsGonorrhea.html',
      filename: 'chlomydia/chlomydia_vs_gonorrhea.html',
      inject: true,
      chunks: ['chlomydiaVsGonorrhea']
    }),
    new HtmlWebpackPlugin({
      template:
        './src/diseases/Chlomydia/ChlomydiaVsVaginosis/ChlomydiaVsVaginosis.html',
      filename: 'chlomydia/chlomydia_vs_vaginosis.html',
      inject: true,
      chunks: ['chlomydiaVsVaginosis']
    }),
    new HtmlWebpackPlugin({
      template:
        './src/diseases/Chlomydia/ChlomydiaVsYeast/ChlomydiaVsYeast.html',
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
      template:
        './src/diseases/Gonorrhea/TestingAlgorithms/TestingAlgorithms.html',
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
      template:
        './src/diseases/Gonorrhea/TreatmentsAlgorithms/TreatmentsAlgorithms.html',
      filename: 'gonorrhea/treatment_algorithms.html',
      inject: true,
      chunks: ['gonorrheaTreatmentAlgorithms']
    }),
    new HtmlWebpackPlugin({
      template:
        './src/diseases/Gonorrhea/GonorrheaVsOther/GonorrheaVsOther.html',
      filename: 'gonorrhea/gonorrhea_vs_other.html',
      inject: true,
      chunks: ['gonorrheaVsOther']
    }),
    new HtmlWebpackPlugin({
      template:
        './src/diseases/Gonorrhea/GonorrheaVsChlomydia/GonorrheaVsChlomydia.html',
      filename: 'gonorrhea/gonorrhea_vs_chlomydia.html',
      inject: true,
      chunks: ['gonorrheaVsChlomydia']
    }),
    new HtmlWebpackPlugin({
      template:
        './src/diseases/Gonorrhea/GonorrheaVsVaginosis/GonorrheaVsVaginosis.html',
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
    new HtmlWebpackPlugin({
      template: './src/diseases/Herpes/Herpes.html',
      filename: 'herpes.html',
      inject: true,
      chunks: ['herpes']
    }),
    new HtmlWebpackPlugin({
      template: './src/diseases/Herpes/Overview/Overview.html',
      filename: 'herpes/overview.html',
      inject: true,
      chunks: ['herpesOverview']
    }),
    new HtmlWebpackPlugin({
      template: './src/diseases/Herpes/WhatISee/WhatISee.html',
      filename: 'herpes/what_i_see.html',
      inject: true,
      chunks: ['herpesWhatISee']
    }),
    new HtmlWebpackPlugin({
      template: './src/diseases/Herpes/WhatIFeel/WhatIFeel.html',
      filename: 'herpes/what_i_feel.html',
      inject: true,
      chunks: ['herpesWhatIFeel']
    }),
    new HtmlWebpackPlugin({
      template: './src/diseases/Herpes/Odds/Odds.html',
      filename: 'herpes/odds.html',
      inject: true,
      chunks: ['herpesOdds']
    }),
    new HtmlWebpackPlugin({
      template: './src/diseases/Herpes/Testing/Testing.html',
      filename: 'herpes/testing.html',
      inject: true,
      chunks: ['herpesTesting']
    }),
    new HtmlWebpackPlugin({
      template:
        './src/diseases/Herpes/TestingAlgorithms/TestingAlgorithms.html',
      filename: 'herpes/testing_algorithms.html',
      inject: true,
      chunks: ['herpesTestingAlgorithms']
    }),
    new HtmlWebpackPlugin({
      template: './src/diseases/Herpes/Treatments/Treatments.html',
      filename: 'herpes/treatments.html',
      inject: true,
      chunks: ['herpesTreatments']
    }),
    new HtmlWebpackPlugin({
      template:
        './src/diseases/Herpes/TreatmentsAlgorithms/TreatmentsAlgorithms.html',
      filename: 'herpes/treatment_algorithms.html',
      inject: true,
      chunks: ['herpesTreatmentAlgorithms']
    }),
    new HtmlWebpackPlugin({
      template: './src/diseases/Herpes/Protecting/Protecting.html',
      filename: 'herpes/protecting.html',
      inject: true,
      chunks: ['herpesProtecting']
    }),
    new HtmlWebpackPlugin({
      template: './src/diseases/Herpes/Comparision/Comparision.html',
      filename: 'herpes/herpes_vs_other.html',
      inject: true,
      chunks: ['herpesVsOther']
    }),
    new HtmlWebpackPlugin({
      template: './src/diseases/Herpes/HerpesVsSyphilis/HerpesVsSyphilis.html',
      filename: 'herpes/herpes_vs_syphilis.html',
      inject: true,
      chunks: ['herpesVsSyphilis']
    }),
    new HtmlWebpackPlugin({
      template:
        './src/diseases/Herpes/HerpesVsBalanitis/HerpesVsBalanitis.html',
      filename: 'herpes/herpes_vs_balanitis.html',
      inject: true,
      chunks: ['herpesVsBalanitis']
    }),
    new HtmlWebpackPlugin({
      template: './src/diseases/Herpes/HerpesVsYeast/HerpesVsYeast.html',
      filename: 'herpes/herpes_vs_yeast.html',
      inject: true,
      chunks: ['herpesVsYeast']
    }),
    new HtmlWebpackPlugin({
      template: './src/diseases/Herpes/Myths/Myths.html',
      filename: 'herpes/myths.html',
      inject: true,
      chunks: ['herpesMyths']
    }),

    new HtmlWebpackPlugin({
      template: './src/diseases/HIV/HIV.html',
      filename: 'hiv.html',
      inject: true,
      chunks: ['hiv']
    }),
    new HtmlWebpackPlugin({
      template: './src/diseases/HIV/Signs/Signs.html',
      filename: 'hiv/hiv_signs.html',
      inject: true,
      chunks: ['hivSigns']
    }),
    new HtmlWebpackPlugin({
      template: './src/diseases/HIV/Odds/Odds.html',
      filename: 'hiv/odds.html',
      inject: true,
      chunks: ['hivOdds']
    }),
    new HtmlWebpackPlugin({
      template: './src/diseases/HIV/Testing/Testing.html',
      filename: 'hiv/testing.html',
      inject: true,
      chunks: ['hivTesting']
    }),
    new HtmlWebpackPlugin({
      template: './src/diseases/HIV/RapidTests/RapidTests.html',
      filename: 'hiv/rapid_tests.html',
      inject: true,
      chunks: ['hivRapidTests']
    }),
    new HtmlWebpackPlugin({
      template: './src/diseases/HIV/PrEP/PrEP.html',
      filename: 'hiv/prep.html',
      inject: true,
      chunks: ['hivPrEP']
    }),
    new HtmlWebpackPlugin({
      template: './src/diseases/HIV/PEP/PEP.html',
      filename: 'hiv/pep.html',
      inject: true,
      chunks: ['hivPEP']
    }),
    new HtmlWebpackPlugin({
      template: './src/diseases/HIV/HIVVsOther/HIVVsOther.html',
      filename: 'hiv/hiv_vs_other.html',
      inject: true,
      chunks: ['HIVVsOther']
    }),
    new HtmlWebpackPlugin({
      template: './src/diseases/HIV/Protecting/Protecting.html',
      filename: 'hiv/protecting.html',
      inject: true,
      chunks: ['hivProtecting']
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new HTMLInlineCSSWebpackPlugin()
  ]
}
