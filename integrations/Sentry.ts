/**
 * Isomorphic Sentry
 * 
 * Require and export the browser or node version of the library depending
 * on where it is being run.
 * 
 * Even if Sentry is not enabled, we still want to export an instance of it
 * So we don't have to check for availability in the application code.
 * Sentry will not send any data unless the init function has been called.
 */
import { Integrations } from '@sentry/tracing';
import { EventHint, Scope, Severity } from '@sentry/types';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

let Sentry;

if (process.browser) {
  Sentry = require('@sentry/browser');
} else {
  Sentry = require('@sentry/node');
}

if (publicRuntimeConfig.sentryEnabled) {
  Sentry.init({
    dsn: publicRuntimeConfig.sentryDsn,
    environment: publicRuntimeConfig.sentryEnvironment,
    integrations: [
      process.browser && new Integrations.BrowserTracing(),
    ].filter(i => i),
    tracesSampleRate: 1.0,
  });
} else {
  /**
   * If Sentry is not enabled, override its methods to console methods so developers 
   * get instant feedback in the console without sending messages off to the server.
   */
  Sentry = {
    ...Sentry,
    /* eslint-disable-next-line */
    captureException: (exception: any, hint?: EventHint, scope?: Scope):
      string | undefined => {
      console.error(exception); // eslint-disable-line no-console

      return undefined;
    },
    // eslint-disable-next-line
    captureMessage: (message: string, level?: Severity, hint?: EventHint, scope?: Scope):
      string | undefined => {
      console.warn(message); // eslint-disable-line no-console

      return undefined;
    },
  };
}

export default Sentry;
