import '@integrations/Sentry';
import '@styles/global.css';

import ErrorBoundary from '@components/error/ErrorBoundary';
import DrawerLayout from '@components/layouts/DrawerLayout';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import routes from '@routes';
import theme from '@src/theme';
import React from 'react';
import ReactDOM from 'react-dom';
import TagManager from 'react-gtm-module';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

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
      <Switch>
        {Object.keys(routes).map((route) => {
          const Page = routes[route].page.default;
          const path = routes[route].path;

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
