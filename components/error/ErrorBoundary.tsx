import Sentry from '@integrations/Sentry';
import { Theme, useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React from 'react';

import Error from './Error';

export interface WithTheme {
  theme: Theme;
}

function DefaultError() {
  const theme = useTheme();

  return (
    <>
      <Typography style={{ marginBottom: theme.spacing(2) }}>
        An unexpected error has occurred. This issue has been logged.
      </Typography>
      <Typography>
        Need help? Contact <a href="mailto:hello@doubledropco.com">hello@doubledropco.com</a>
      </Typography>
    </>
  );
}

export interface ErrorBoundaryProps {
  children?: React.ReactNode
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps> {
  state = {
    hasError: false,
    error: null,
  };

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

    const title = '500';

    if (hasError) {
      return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: '1 1 auto' }}>
          <Error
            title={(error && error.title) || title}
            message={(error && error.message) || <DefaultError />}
            error={error}
          />
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
