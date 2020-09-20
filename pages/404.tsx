import Error from '@components/error/Error';
import React from 'react';

export default function _404() {
  return (
    <Error
      title="404"
      message="Page not found."
    />
  );
}