import '@integrations/Sentry';
import '@styles/global.css';

import ErrorBoundary from '@components/error/ErrorBoundary';
import DrawerLayout from '@components/layouts/DrawerLayout';
import ScrollToTop from '@components/scroll-to-top/ScrollToTop';
import loadable from '@loadable/component';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '@src/theme';
import React from 'react';
import ReactDOM from 'react-dom';
import TagManager from 'react-gtm-module';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import routes from './routes';
import seo from './seo';

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
      <Switch>
        {Object.keys(routes).map((route) => {
          const Page = loadable(routes[route].page);
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
                  <DrawerLayout key={layoutKey}>
                    <ErrorBoundary key={layoutKey}>
                      <Helmet>
                        <title>{title}</title>
                        <meta name="description" content={description} />
                        <meta property="og:url" content={new URL(path, seo.url).href} />
                        <meta property="og:title" content={seo.titleTemplate(title)} />
                        <meta property="og:site_name" content="Sudo&#x27;s Tools" />
                      </Helmet>
                      <Page />
                    </ErrorBoundary>
                  </DrawerLayout>
                );
              }}
            />
          );
        })}
      </Switch>
    </ThemeProvider>
  );
}

const container = document.createElement('div');

container.id = 'app';
document.body.appendChild(container);

ReactDOM.render(
  <Router>
    <App />
  </Router>
  , container);
