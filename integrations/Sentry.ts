import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

Sentry.init({
  dsn: publicRuntimeConfig.sentryDsn,
  environment: publicRuntimeConfig.sentryEnvironment,
  integrations: [
    process.browser && new Integrations.BrowserTracing(),
  ].filter(i => i),
  tracesSampleRate: 1.0,
});
  
export default Sentry;
