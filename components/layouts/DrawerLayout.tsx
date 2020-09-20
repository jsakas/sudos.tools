import useRouter from '@hooks/useRouter';
import logoImage from '@images/sudo-sm.png';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import useBreakpoints from 'hooks/useBreakpoints';
import React, { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import routes from '../../routes';
import ToolList from './ToolList';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      minHeight: '100vh',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      boxShadow: 'none',
      [theme.breakpoints.up('sm')]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
      borderRight: 0,
    },
    contentWrapper: {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    content: {
      flex: '1 1 auto',
      minHeight: '100vh',
    },
    mobileToolbar: {
      background: theme.palette.primary.main,
      display: 'flex',
      alignItems: 'center',
      color: theme.palette.common.white,
      padding: theme.spacing(0, 2),
      position: 'fixed',
      width: drawerWidth,
      zIndex: 10,
    },
    footer: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      padding: theme.spacing(3),
      flex: '1 1 auto',
    }
  }),
);

function Logo() {
  const theme = useTheme();

  return (
    <RouterLink to="/" style={{ color: theme.palette.common.white, textDecoration: 'none' }} title="Homepage">
      <Box component="span" display="flex" alignItems="center">
        <img alt="Sudo the Dog" src={logoImage} width={50} style={{ marginRight: theme.spacing(1) }} />
        <Typography variant="h6" component="div" noWrap style={{ marginBottom: 0 }}>
          Sudo&apos;s Tools
        </Typography>
      </Box>
    </RouterLink>
  );
}

function DrawerLayout(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { sm, md } = useBreakpoints();
  const router = useRouter();

  useEffect(() => {
    return router.history.listen(() => setMobileOpen(false));
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          {!sm && (
            <Logo />
          )}
          {md && (
            <Typography>
              Free online tools for developers
            </Typography>
          )}
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="Website Navigation">
        <Drawer
          container={container}
          variant={sm ? 'permanent' : 'temporary'}
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <div>
            <div className={clsx(classes.toolbar, classes.mobileToolbar)}>
              <Logo />
            </div>
            <Divider />
            <List
              style={{ paddingTop: 65 }}
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  Navigation
                </ListSubheader>
              }
            >
              <ToolList
                title="Formatters"
                routes={routes.filter(route => route.menus?.indexOf('formatters') > -1)}
              />
              <ToolList
                title="Converters"
                routes={routes.filter(route => route.menus?.indexOf('converters') > -1)}
              />
              <ToolList
                title="Diff Checkers"
                routes={routes.filter(route => route.menus?.indexOf('diff') > -1)}
              />
              <ToolList
                title="Encoders &amp; Decoders"
                routes={routes.filter(route => route.menus?.indexOf('encoders') > -1)}
              />
            </List>
          </div>
        </Drawer>
      </nav>
      <div className={classes.contentWrapper}>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          {props.children}
        </main>
        <footer className={classes.footer}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Typography variant="h4" gutterBottom>
                Converters
              </Typography>
              {routes.filter(route => route.menus?.indexOf('converters') > -1).map((route) => (
                <RouterLink to={route.path} key={route.title} title={route.title}>
                  <Typography component="span" title={route.title} style={{ color: theme.palette.common.white }}>
                    <ListItemText primary={route.title} />
                  </Typography>
                </RouterLink>
              ))}
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Typography variant="h4" gutterBottom>
                Formatters
              </Typography>
              {routes.filter(route => route.menus?.indexOf('formatters') > -1).map((route) => (
                <RouterLink to={route.path} key={route.title} title={route.title}>
                  <Typography component="span" title={route.title} style={{ color: theme.palette.common.white }}>
                    <ListItemText primary={route.title} />
                  </Typography>
                </RouterLink>
              ))}
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Typography variant="h4" gutterBottom>
                Diff Checkers
              </Typography>
              {routes.filter(route => route.menus?.indexOf('diff') > -1).map((route) => (
                <RouterLink to={route.path} key={route.title} title={route.title}>
                  <Typography component="span" title={route.title} style={{ color: theme.palette.common.white }}>
                    <ListItemText primary={route.title} />
                  </Typography>
                </RouterLink>
              ))}
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Typography variant="h4" gutterBottom>
                Encoders &amp; Decoders
              </Typography>
              {routes.filter(route => route.menus?.indexOf('encoders') > -1).map((route) => (
                <RouterLink to={route.path} key={route.title} title={route.title}>
                  <Typography component="span" title={route.title} style={{ color: theme.palette.common.white }}>
                    <ListItemText primary={route.title} />
                  </Typography>
                </RouterLink>
              ))}
            </Grid>
          </Grid>
          <div style={{ marginTop: theme.spacing(6) }}>
            <Typography variant="caption">
              &copy; Copyright 2020 Doubledrop, LLC
              {routes.filter(route => route.menus?.indexOf('links') > -1).map((route) => (
                <>
                &nbsp;&nbsp;|&nbsp;&nbsp;
                  <Link component={RouterLink} to={route.path} key={route.title}>
                    {route.title}
                  </Link>
                </>
              ))}
            </Typography>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default React.memo(DrawerLayout);