module.exports = {
  webpack: (config) => {
    config.node = {
      ...config.node || {},
      fs: 'empty',
    };

    return config;
  },
  serverRuntimeConfig: {

  },
  publicRuntimeConfig: {
    sentryDsn: 'https://b0bf1a8f24ed40aa80c9519772bfc1c4@o203774.ingest.sentry.io/5427478',
    sentryEnabled: JSON.parse(process.env.SENTRY_ENABLED || 'false'),
    sentryEnvironment: process.env.SENTRY_ENVIRONMENT || 'unknown',
    gtmId: 'GTM-WLKT6HD',
  },
};
