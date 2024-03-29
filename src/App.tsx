import '@src/integrations/Sentry';
import '@styles/global.css';

import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';
import DrawerLayout from '@components/Layouts/DrawerLayout';
import ScrollToTop from '@components/ScrollToTop/ScrollToTop';
import loadable from '@loadable/component';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@src/theme';
import React from 'react';
import { createRoot } from 'react-dom/client';
import TagManager from 'react-gtm-module';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import routes from '../routes';
import seo from '../seo';

const DEFAULT_DESCRIPTION = 'Free online tools for developers, including formatters, minifiers, validators, compactors and many more!';

function App() {
  React.useEffect(() => {
    if (CONFIG.gtm?.enabled)
      TagManager.initialize({
        gtmId: CONFIG.gtm.id,
      });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ScrollToTop />
      <DrawerLayout>
        <Switch>
          {Object.keys(routes).map((route) => {
            const Page = loadable(routes[route].page, {
              fallback: () => {
                return (
                  <Box width="100%" height="100%" display="flex" alignItems="center" justifyContent="center">
                    <CircularProgress />
                  </Box>
                );
              }
            });

            const path = routes[route].path;
            const title = routes[route].title;
            const description = routes[route].description || DEFAULT_DESCRIPTION;

            return (
              <Route
                key={path}
                exact
                path={path}
                render={({ match }) => {
                  const layoutKey = match.path;

                  return (
                    <ErrorBoundary key={layoutKey}>
                      <Helmet>
                        <title>{title}</title>
                        <meta name="description" content={description} />
                        <meta property="og:url" content={new URL(path, seo.url).href} />
                        <meta property="og:title" content={seo.titleTemplate(title)} />
                        <meta property="og:site_name" content="Sudo&#x27;s Tools" />
                      </Helmet>
                      <div style={{
                        flex: '1 1 auto',
                        minHeight: '100vh',
                        padding: routes[route].padding || theme.spacing(3)
                      }}
                      >
                        <Page />
                      </div>
                    </ErrorBoundary>
                  );
                }}
              />
            );
          })}
        </Switch>
      </DrawerLayout>
    </ThemeProvider>
  );
}

const container = document.createElement('div');

container.id = 'app';
document.body.appendChild(container);
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
  <Router>
    <App />
  </Router>
);