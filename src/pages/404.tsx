import Error from '@components/ErrorBoundary/Error';
import React from 'react';

export default function _404() {
  return (
    <Error
      title="404"
      message="Page not found."
    />
  );
}