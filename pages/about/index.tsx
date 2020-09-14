import Typography from '@material-ui/core/Typography';
import { NextSeo } from 'next-seo';
import React from 'react';

const seo = {
  title: 'About',
  description: 'Sudo is a dog. She loves. She dreams. She runs as root. She helps with your developing. She is a good girl.',
};

export default function Index() {
  return (
    <>
      <NextSeo {...seo} />
      <Typography variant="h3" component="h1" gutterBottom>
        {seo.title}
      </Typography>
      <Typography gutterBottom>
        {seo.description}
      </Typography>
    </>
  );
}
