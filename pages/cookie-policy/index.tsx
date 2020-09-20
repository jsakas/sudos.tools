import Typography from '@material-ui/core/Typography';
import React from 'react';

const seo = {
  title: 'Cookie Policy',

};

export default function Index() {
  return (
    <>

      <Typography variant="h3" component="h1" gutterBottom>
        {seo.title}
      </Typography>
    </>
  );
}
