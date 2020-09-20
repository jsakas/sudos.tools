import Typography from '@material-ui/core/Typography';
import React from 'react';

const seo = {
  title: 'About',
  description: 'Sudo is a dog. She loves. She dreams. She runs as root. She helps with your developing. She is a good girl.',
};

export default function Index() {
  return (
    <>

      <Typography variant="h3" component="h1" gutterBottom>
        {seo.title}
      </Typography>
      <Typography gutterBottom>
        {seo.description}
      </Typography>
    </>
  );
}
