import '@integrations/Sentry';
import '@styles/globals.scss';

import DrawerLayout from '@components/layouts/DrawerLayout';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '@src/theme';
import { AppProps } from 'next/app';
import getConfig from 'next/config';
import Head from 'next/head';
import React from 'react';
import TagManager from 'react-gtm-module';

const { publicRuntimeConfig } = getConfig();

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
    if (process.browser) {
      TagManager.initialize({
        gtmId: publicRuntimeConfig.gtmId,
      });
    }
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
