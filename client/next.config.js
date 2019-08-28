if (typeof require !== 'undefined') {
  require.extensions['.less'] = file => {};
}

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const withLess = require('@zeit/next-less');
const withCSS = require('@zeit/next-css')

const nextConfig = {
  distDir: '../.next',
  //target: 'serverless',
  env: {
    weatherApi: '',
    mapBoxApi: ''
  },
  onDemandEntries: {
    maxInactiveAge: 1000 * 60 * 60,
    pagesBufferLength: 5
  },
  lessLoaderOptions: {
    javascriptEnabled: true
  },
  webpack: config => config,
  publicRuntimeConfig: {
    NODE_ENV: process.env.NODE_ENV,
    GRAPHQL_ENDPOINT: process.env.GRAPHQL_ENDPOINT,
    FACEBOOK_CLIENT_ID: process.env.FACEBOOK_CLIENT_ID,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    IMP_CODE: process.env.IMP_CODE
  }
};

module.exports = withLess(withCSS(nextConfig));
