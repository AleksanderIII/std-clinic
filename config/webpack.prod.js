const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HTMLInlineCSSWebpackPlugin = require('html-inline-css-webpack-plugin')
  .default

module.exports = {
  entry: {
    home: './src/index.js',

    book: './src/book/book.js',

    sitemap: './src/sitemap/sitemap.js',

    meetTheDoctor: './src/meetTheDoctor/meetTheDoctor.js',

    officeHours: './src/officeHours/officeHours.js',

    howItWorks: './src/howItWorks/howItWorks.js',

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
    hivProtecting: './src/diseases/HIV/Protecting/protecting.js',

    syphilis: './src/diseases/Syphilis/syphilis.js',
    syphilisSigns: './src/diseases/Syphilis/Signs/signs.js',
    syphilisOdds: './src/diseases/Syphilis/Odds/odds.js',
    syphilisTesting: './src/diseases/Syphilis/Testing/testing.js',
    syphilisTreatment: './src/diseases/Syphilis/Treatment/treatment.js',
    syphilisComparision: './src/diseases/Syphilis/Comparision/comparision.js',
    syphilisProtecting: './src/diseases/Syphilis/Protecting/protecting.js',

    testsChlomydia: './src/tests/Chlomydia/chlomydia.js',
    testsGonorrhea: './src/tests/Gonorrhea/gonorrhea.js',
    testsHerpes: './src/tests/Herpes/herpes.js',
    testsHIV: './src/tests/HIV/hiv.js',
    testsHPV: './src/tests/HPV/hpv.js',
    testsSyphilis: './src/tests/Syphilis/syphilils.js',
    testsGardnerella: './src/tests/Gardnerella/gardnerella.js',
    testsTrichomoniasis: './src/tests/Trichomoniasis/trichomoniasis.js',
    testsMycoplasma: './src/tests/Mycoplasma/mycoplasma.js',
    testsUreaplasma: './src/tests/Ureaplasma/ureaplasma.js',
    testsYeast: './src/tests/Yeast/yeast.js',
    testsBalanitis: './src/tests/Balanitis/balanitis.js',

    blogs: './src/blogs/blogs.js',
    blogGenitalWarts: './src/blogs/GenitalWarts/genitalWarts.js',
    blogGenitalWarts: './src/blogs/GenitalWarts/genitalWarts.js',
    blogColdSores: './src/blogs/ColdSores/coldSores.js',
    blogBlameForHerpes: './src/blogs/BlameForHerpes/blameForHerpes.js',
    blogHerpesDiagnosis: './src/blogs/HerpesDiagnosis/herpesDiagnosis.js',
    blogPartnerProtecting: './src/blogs/PartnerProtecting/partnerProtecting.js',
    blogImportantFacts: './src/blogs/ImportantFacts/importantFacts.js',
    blogHandJob: './src/blogs/HandJob/handJob.js',
    blogPublicLice: './src/blogs/PublicLice/publicLice.js',
    blogSyphilisTreatment: './src/blogs/SyphilisTreatment/syphilisTreatment.js',
    blogPreventingHIV: './src/blogs/PreventingHIV/preventingHIV.js',
    blogNightStand: './src/blogs/NightStand/nightStand.js',
    blogMolluscum: './src/blogs/Molluscum/molluscum.js',
    blogHerpesTransmission:
      './src/blogs/HerpesTransmission/herpesTransmission.js',
    blogAgainstOdds: './src/blogs/AgainstOdds/againstOdds.js',
    blogVaginalOdor: './src/blogs/VaginalOdor/vaginalOdor.js',
    blogGenitalHerpes: './src/blogs/GenitalHerpes/genitalHerpes.js',
    blogHomosexualSex: './src/blogs/HomosexualSex/homosexualSex.js'
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].[chunkhash:8].bundle.js',
    chunkFilename: '[name].[chunkhash:8].chunk.js'
  },
  mode: 'production',
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
            loader: 'file-loader', // This will resolves import/require() on a file into a url and emits the file into the output directory.
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
            attrs: ['img:src', ':data-src'],
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
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/book/Book.html',
      filename: 'online-appointment.html',
      inject: true,
      chunks: ['book'],
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/sitemap/Sitemap.html',
      filename: 'sitemap.html',
      inject: true,
      chunks: ['sitemap']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/index.html',
      filename: 'index.html',
      inject: true,
      chunks: ['home'],
      minify: {
        removeScriptTypeAttributes: true
      }
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/meetTheDoctor/MeetTheDoctor.html',
      filename: 'meet-doctor-fuzayloff.html',
      inject: true,
      chunks: ['meetTheDoctor']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/officeHours/OfficeHours.html',
      filename: 'office-hours-location.html',
      inject: true,
      chunks: ['officeHours']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/howItWorks/HowItWorks.html',
      filename: 'how-it-works.html',
      inject: true,
      chunks: ['howItWorks']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/diseases/Chlomydia/chlomydia.html',
      filename: 'chlamydia-symptoms-signs-testing-treatment-comparison.html',
      inject: true,
      chunks: ['chlomydia']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/diseases/Chlomydia/WhatISee/WhatISee.html',
      filename: 'chlamydia-signs.html',
      inject: true,
      chunks: ['chlomydiaWhatISee']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/diseases/Chlomydia/WhatIFeel/WhatIFeel.html',
      filename: 'chlamydia-symptoms.html',
      inject: true,
      chunks: ['chlomydiaWhatIFeel']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/diseases/Chlomydia/Odds/Odds.html',
      filename: 'odds-getting-chlamydia.html',
      inject: true,
      chunks: ['chlomydiaOdds']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/diseases/Chlomydia/Testing/Testing.html',
      filename: 'chlamydia-testing.html',
      inject: true,
      chunks: ['chlomydiaTesting']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template:
        './src/diseases/Chlomydia/TestingAlgorithms/TestingAlgorithms.html',
      filename: 'chlamydia-testing-algorithms.html',
      inject: true,
      chunks: ['chlomydiaTestingAlgorithms']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/diseases/Chlomydia/Treatments/Treatments.html',
      filename: 'chlamydia-treatment.html',
      inject: true,
      chunks: ['chlomydiaTreatments']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template:
        './src/diseases/Chlomydia/TreatmentsAlgorithms/TreatmentsAlgorithms.html',
      filename: 'chlamydia-treatment-algorithms.html',
      inject: true,
      chunks: ['chlomydiaTreatmentAlgorithms']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template:
        './src/diseases/Chlomydia/ChlomydiaVsOther/ChlomydiaVsOther.html',
      filename: 'chlamydia-comparison.html',
      inject: true,
      chunks: ['chlomydiaVsOther']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template:
        './src/diseases/Chlomydia/ChlomydiaVsGonorrhea/ChlomydiaVsGonorrhea.html',
      filename: 'chlamydia-vs-gonorrhea.html',
      inject: true,
      chunks: ['chlomydiaVsGonorrhea']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template:
        './src/diseases/Chlomydia/ChlomydiaVsVaginosis/ChlomydiaVsVaginosis.html',
      filename: 'chlamydia-vs-bv.html',
      inject: true,
      chunks: ['chlomydiaVsVaginosis']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template:
        './src/diseases/Chlomydia/ChlomydiaVsYeast/ChlomydiaVsYeast.html',
      filename: 'chlamydia-vs-vaginal-yeast-infection.html',
      inject: true,
      chunks: ['chlomydiaVsYeast']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/diseases/Chlomydia/Protecting/Protecting.html',
      filename: 'chlamydia-partner-protection.html',
      inject: true,
      chunks: ['chlomydiaProtecting']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/diseases/Chlomydia/Myths/Myths.html',
      filename: 'chlamydia-myths.html',
      inject: true,
      chunks: ['chlomydiaMyths']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/diseases/Gonorrhea/Gonorrhea.html',
      filename: 'gonorrhea-symptoms-signs-testing-treatment-comparison.html',
      inject: true,
      chunks: ['gonorrhea']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/diseases/Gonorrhea/WhatISee/WhatISee.html',
      filename: 'gonorrhea-signs.html',
      inject: true,
      chunks: ['gonorrheaWhatISee']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/diseases/Gonorrhea/WhatIFeel/WhatIFeel.html',
      filename: 'gonorrhea-symptoms.html',
      inject: true,
      chunks: ['gonorrheaWhatIFeel']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/diseases/Gonorrhea/Odds/Odds.html',
      filename: 'odds-getting-gonorrhea.html',
      inject: true,
      chunks: ['gonorrheaOdds']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/diseases/Gonorrhea/Testing/Testing.html',
      filename: 'gonorrhea-testing.html',
      inject: true,
      chunks: ['gonorrheaTesting']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template:
        './src/diseases/Gonorrhea/TestingAlgorithms/TestingAlgorithms.html',
      filename: 'gonorrhea-testing-algorithms.html',
      inject: true,
      chunks: ['gonorrheaTestingAlgorithms']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/diseases/Gonorrhea/Treatments/Treatments.html',
      filename: 'gonorrhea-treatment.html',
      inject: true,
      chunks: ['gonorrheaTreatments']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template:
        './src/diseases/Gonorrhea/TreatmentsAlgorithms/TreatmentsAlgorithms.html',
      filename: 'gonorrhea-treatment-algorithms.html',
      inject: true,
      chunks: ['gonorrheaTreatmentAlgorithms']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template:
        './src/diseases/Gonorrhea/GonorrheaVsOther/GonorrheaVsOther.html',
      filename: 'gonorrhea-comparison.html',
      inject: true,
      chunks: ['gonorrheaVsOther']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template:
        './src/diseases/Gonorrhea/GonorrheaVsChlomydia/GonorrheaVsChlomydia.html',
      filename: 'gonorrhea-vs-chlamydia.html',
      inject: true,
      chunks: ['gonorrheaVsChlomydia']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template:
        './src/diseases/Gonorrhea/GonorrheaVsVaginosis/GonorrheaVsVaginosis.html',
      filename: 'gonorrhea-vs-bv.html',
      inject: true,
      chunks: ['gonorrheaVsVaginosis']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/diseases/Gonorrhea/Protecting/Protecting.html',
      filename: 'gonorrhea-partner-protection.html',
      inject: true,
      chunks: ['gonorrheaProtecting']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/diseases/Gonorrhea/Myths/Myths.html',
      filename: 'gonorrhea-myths.html',
      inject: true,
      chunks: ['gonorrheaMyths']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/diseases/Herpes/Herpes.html',
      filename: 'herpes-symptoms-signs-testing-treatment-comparison.html',
      inject: true,
      chunks: ['herpes']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/diseases/Herpes/Overview/Overview.html',
      filename: 'herpes-virus-HSV1-HSV2-overview.html',
      inject: true,
      chunks: ['herpesOverview']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/diseases/Herpes/WhatISee/WhatISee.html',
      filename: 'herpes-signs.html',
      inject: true,
      chunks: ['herpesWhatISee']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/diseases/Herpes/WhatIFeel/WhatIFeel.html',
      filename: 'herpes-symptoms.html',
      inject: true,
      chunks: ['herpesWhatIFeel']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/diseases/Herpes/Odds/Odds.html',
      filename: 'odds-of-getting-herpes.html',
      inject: true,
      chunks: ['herpesOdds']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/diseases/Herpes/Testing/Testing.html',
      filename: 'herpes-testing.html',
      inject: true,
      chunks: ['herpesTesting']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template:
        './src/diseases/Herpes/TestingAlgorithms/TestingAlgorithms.html',
      filename: 'herpes-testing-algorithms.html',
      inject: true,
      chunks: ['herpesTestingAlgorithms']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/diseases/Herpes/Treatments/Treatments.html',
      filename: 'herpes-treatment.html',
      inject: true,
      chunks: ['herpesTreatments']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template:
        './src/diseases/Herpes/TreatmentsAlgorithms/TreatmentsAlgorithms.html',
      filename: 'herpes-treatment-algorithms.html',
      inject: true,
      chunks: ['herpesTreatmentAlgorithms']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/diseases/Herpes/Protecting/Protecting.html',
      filename: 'reduce-herpes-transmission.html',
      inject: true,
      chunks: ['herpesProtecting']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/diseases/Herpes/Comparision/Comparision.html',
      filename: 'herpes-comparison.html',
      inject: true,
      chunks: ['herpesVsOther']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/diseases/Herpes/HerpesVsSyphilis/HerpesVsSyphilis.html',
      filename: 'herpes-syphilis.html',
      inject: true,
      chunks: ['herpesVsSyphilis']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template:
        './src/diseases/Herpes/HerpesVsBalanitis/HerpesVsBalanitis.html',
      filename: 'herpes-balanitis.html',
      inject: true,
      chunks: ['herpesVsBalanitis']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/diseases/Herpes/HerpesVsYeast/HerpesVsYeast.html',
      filename: 'herpes-vaginal-yeast.html',
      inject: true,
      chunks: ['herpesVsYeast']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/diseases/Herpes/Myths/Myths.html',
      filename: 'herpes-myths.html',
      inject: true,
      chunks: ['herpesMyths']
    }),

    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/diseases/HIV/HIV.html',
      filename: 'hiv-symptoms-signs-testing-treatment-comparison.html',
      inject: true,
      chunks: ['hiv']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/diseases/HIV/Signs/Signs.html',
      filename: 'hiv-signs-symptoms.html',
      inject: true,
      chunks: ['hivSigns']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/diseases/HIV/Odds/Odds.html',
      filename: 'odds-getting-hiv.html',
      inject: true,
      chunks: ['hivOdds']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/diseases/HIV/Testing/Testing.html',
      filename: 'hiv-testing.html',
      inject: true,
      chunks: ['hivTesting']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/diseases/HIV/RapidTests/RapidTests.html',
      filename: 'hiv-rapid-tests.html',
      inject: true,
      chunks: ['hivRapidTests']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/diseases/HIV/PrEP/PrEP.html',
      filename: 'hiv-prep.html',
      inject: true,
      chunks: ['hivPrEP']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/diseases/HIV/PEP/PEP.html',
      filename: 'hiv-pep.html',
      inject: true,
      chunks: ['hivPEP']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/diseases/HIV/HIVVsOther/HIVVsOther.html',
      filename: 'hiv-comparison.html',
      inject: true,
      chunks: ['HIVVsOther']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/diseases/HIV/Protecting/Protecting.html',
      filename: 'hiv-partner-protection.html',
      inject: true,
      chunks: ['hivProtecting']
    }),

    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/diseases/Syphilis/Syphilis.html',
      filename: 'syphilis-symptoms-signs-testing-treatment-comparison.html',
      inject: true,
      chunks: ['syphilis']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/diseases/Syphilis/Signs/Signs.html',
      filename: 'syphilis-symptoms-and-signs.html',
      inject: true,
      chunks: ['syphilisSigns']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/diseases/Syphilis/Odds/Odds.html',
      filename: 'odds-getting-syphilis.html',
      inject: true,
      chunks: ['syphilisOdds']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/diseases/Syphilis/Testing/Testing.html',
      filename: 'syphilis-testing.html',
      inject: true,
      chunks: ['syphilisTesting']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/diseases/Syphilis/Comparision/Comparision.html',
      filename: 'syphilis-comparison.html',
      inject: true,
      chunks: ['syphilisComparision']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/diseases/Syphilis/Protecting/Protecting.html',
      filename: 'syphilis-partner-protection.html',
      inject: true,
      chunks: ['syphilisProtecting']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/diseases/Syphilis/Treatment/Treatment.html',
      filename: 'syphilis-treatment.html',
      inject: true,
      chunks: ['syphilisTreatment']
    }),

    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/tests/Chlomydia/Chlomydia.html',
      filename: 'chlamydia-testing-treatment-nyc.html',
      inject: true,
      chunks: ['testsChlomydia']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/tests/Gonorrhea/Gonorrhea.html',
      filename: 'gonorrhea-testing-treatment-nyc.html',
      inject: true,
      chunks: ['testsGonorrhea']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/tests/Herpes/Herpes.html',
      filename: 'herpes-testing-treatment-prevention-nyc.html',
      inject: true,
      chunks: ['testsHerpes']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/tests/HIV/HIV.html',
      filename: 'hiv-testing-nyc.html',
      inject: true,
      chunks: ['testsHIV']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/tests/HPV/HPV.html',
      filename: 'hpv-testing-treatment-nyc.html',
      inject: true,
      chunks: ['testsHPV']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/tests/Syphilis/Syphilis.html',
      filename: 'syphilis-testing-treatment-nyc.html',
      inject: true,
      chunks: ['testsSyphilis']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/tests/Gardnerella/Gardnerella.html',
      filename: 'bacterial-vaginosis-testing-treatment-prevention-nyc.html',
      inject: true,
      chunks: ['testsGardnerella']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/tests/Trichomoniasis/Trichomoniasis.html',
      filename: 'trichomoniasis-testing-treatment-prevention-nyc.html',
      inject: true,
      chunks: ['testsTrichomoniasis']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/tests/Mycoplasma/Mycoplasma.html',
      filename: 'mycoplasma-testing-treatment-prevention-nyc.html',
      inject: true,
      chunks: ['testsMycoplasma']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/tests/Ureaplasma/Ureaplasma.html',
      filename: 'ureaplasma-testing-treatment-prevention-nyc.html',
      inject: true,
      chunks: ['testsUreaplasma']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/tests/Yeast/Yeast.html',
      filename: 'vaginal-yeast-infection-testing-treatment-prevention-nyc.html',
      inject: true,
      chunks: ['testsYeast']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/tests/Balanitis/Balanitis.html',
      filename: 'balanitis-jock-itch-testing-treatment-prevention-nyc.html',
      inject: true,
      chunks: ['testsBalanitis']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/blogs/Blogs.html',
      filename: 'articles.html',
      inject: true,
      chunks: ['blogs']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/blogs/GenitalWarts/GenitalWarts.html',
      filename: 'articles/genital-warts-versus-skin-tags.html',
      inject: true,
      chunks: ['blogGenitalWarts']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/blogs/ColdSores/ColdSores.html',
      filename: 'articles/cold-sores-versus-canker-sores.html',
      inject: true,
      chunks: ['blogColdSores']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/blogs/BlameForHerpes/BlameForHerpes.html',
      filename: 'articles/how-i-contracted-herpes-HSV-1-and-HSV-2.html',
      inject: true,
      chunks: ['blogBlameForHerpes']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/blogs/HerpesDiagnosis/HerpesDiagnosis.html',
      filename: 'articles/herpes-legal-issues.html',
      inject: true,
      chunks: ['blogHerpesDiagnosis']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/blogs/PartnerProtecting/PartnerProtecting.html',
      filename: 'articles/protecting-partner-from-herpes.html',
      inject: true,
      chunks: ['blogPartnerProtecting']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/blogs/ImportantFacts/ImportantFacts.html',
      filename: 'articles/std-testing-earliest-to-definitive.html',
      inject: true,
      chunks: ['blogImportantFacts']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/blogs/HandJob/HandJob.html',
      filename: 'articles/std-chance-with-hand-job.html',
      inject: true,
      chunks: ['blogHandJob']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/blogs/PublicLice/PublicLice.html',
      filename: 'articles/pubic-lice-crabs-visually.html',
      inject: true,
      chunks: ['blogPublicLice']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/blogs/SyphilisTreatment/SyphilisTreatment.html',
      filename: 'articles/syphilis-postexposure-treatment.html',
      inject: true,
      chunks: ['blogSyphilisTreatment']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/blogs/PreventingHIV/PreventingHIV.html',
      filename: 'articles/HIV-PrEP-medication-practical-guide.html',
      inject: true,
      chunks: ['blogPreventingHIV']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/blogs/NightStand/NightStand.html',
      filename: 'articles/std-chance-one-night-stand.html',
      inject: true,
      chunks: ['blogNightStand']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/blogs/Molluscum/Molluscum.html',
      filename: 'articles/diagnosing-molluscum-contagiosum-visually.html',
      inject: true,
      chunks: ['blogMolluscum']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/blogs/HerpesTransmission/HerpesTransmission.html',
      filename: 'articles/protected-herpes-transmission.html',
      inject: true,
      chunks: ['blogHerpesTransmission']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/blogs/AgainstOdds/AgainstOdds.html',
      filename: 'articles/std-risk-with-one-time-heterosexual-encounter.html',
      inject: true,
      chunks: ['blogAgainstOdds']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/blogs/VaginalOdor/VaginalOdor.html',
      filename: 'articles/vaginal-smell-causes-testing-treatment.html',
      inject: true,
      chunks: ['blogVaginalOdor']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/blogs/GenitalHerpes/GenitalHerpes.html',
      filename: 'articles/herpes-and-other-genital-sores.html',
      inject: true,
      chunks: ['blogGenitalHerpes']
    }),
    new HtmlWebpackPlugin({
      favicon: './src/images/favicon.svg',
      template: './src/blogs/HomosexualSex/HomosexualSex.html',
      filename: 'articles/one-time-homosexual-contact-std-risk-men.html',
      inject: true,
      chunks: ['blogHomosexualSex']
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: './src/images', to: 'images' }]
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: './src/fonts', to: 'fonts' }]
    }),
    new HTMLInlineCSSWebpackPlugin()
  ]
}
