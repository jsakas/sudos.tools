import { useTheme } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import React from 'react';

type ErrorProps = {
  title: string;
  message: string | JSX.Element;
  error?: Error;
}

const Error: React.FC<ErrorProps> = (props: ErrorProps) => {
  const theme = useTheme();
  const { title, message, error } = props;

  return (
    <div>
      {title && (<Typography variant="h3" component="h1">{title}</Typography>)}
      <Typography>{message}</Typography>
      {error && CONFIG.debug?.stacktrace && (
        <code style={{ marginTop: theme.spacing(2) }}>
          <pre>
            {error.stack}
          </pre>
        </code>
      )}
    </div>
  );
};

export default Error;
