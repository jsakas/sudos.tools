import DrawerLayout from '@components/layouts/DrawerLayout';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import TagManager from 'react-gtm-module';

import theme from '../src/theme';

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  React.useEffect(() => {
    TagManager.initialize({
      gtmId: 'GTM-WLKT6HD',
    });
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Sudo&apos;s Tools</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <DrawerLayout>
          <Component {...pageProps} />
        </DrawerLayout>
      </ThemeProvider>
    </React.Fragment>
  );
}
