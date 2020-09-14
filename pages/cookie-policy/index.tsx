import Typography from '@material-ui/core/Typography';
import { NextSeo } from 'next-seo';
import React from 'react';

const seo = {
  title: 'Cookie Policy',

};

export default function Index() {
  return (
    <>
      <NextSeo {...seo} />
      <Typography variant="h3" component="h1" gutterBottom>
        {seo.title}
      </Typography>
    </>
  );
}
