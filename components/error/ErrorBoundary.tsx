import Sentry from '@integrations/Sentry';
import { withTheme } from '@material-ui/core';
import { ThemedComponentProps } from '@material-ui/core/styles/withTheme';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import Error from './Error';

class ErrorBoundary extends React.Component<ThemedComponentProps> {
  state = {
    hasError: false,
    error: null,
  }

  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error: error,
    };
  }

  componentDidCatch(error, errorInfo) {
    Sentry.captureException(error, { extra: errorInfo });
  }

  render() {
    const { hasError, error } = this.state;
    const { theme } = this.props;

    const title = '500';
    const message = (
      <>
        <Typography style={{ marginBottom: theme.spacing(2) }}>
          An unexpected error has occurred. This issue has been logged.
        </Typography>
        <Typography>
          Need help? Contact <a href="mailto:hello@guesthouseshop.com">hello@guesthouseshop.com</a>
        </Typography>
      </>
    );

    if (hasError) {
      return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
          <Error
            title={(error && error.title) || title}
            message={(error && error.message) || message}
            error={error}
          />
        </div>
      );
    }

    return this.props.children;
  }
}

export default withTheme(ErrorBoundary);
