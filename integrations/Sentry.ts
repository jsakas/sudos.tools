import { EventHint, Scope, Severity } from '@sentry/types';

let Sentry = require('@sentry/browser');

if (CONFIG.sentry?.enabled) {
  Sentry.init({
    dsn: CONFIG.sentry.dsn,
    environment: CONFIG.sentry.environment,
    release: GITHUB_REF || GITHUB_SHA,
  });
} else {
  /**
     * If Sentry is not enabled, override its methods to console methods so developers 
     * get instant feedback in the console without sending messages off to the server.
     */
  Sentry = {
    ...Sentry,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    captureException: (exception: any, hint?: EventHint, scope?: Scope):
      string | undefined => {
      console.error(exception);

      return undefined;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    captureMessage: (message: string, level?: Severity, hint?: EventHint, scope?: Scope):
      string | undefined => {
      console.warn(message);

      return undefined;
    },
  };
}

export default Sentry;
