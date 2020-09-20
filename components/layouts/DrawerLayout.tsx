import LinkBehavior from '@components/link-behavior/LinkBehavior';
import logoImage from '@images/sudo.png';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import useBreakpoints from 'hooks/useBreakpoints';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import routes from '../../routes';

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
      padding: theme.spacing(3),
      flex: 1,
      minHeight: '100vh',
    },
    mobileToolbar: {
      background: theme.palette.primary.main,
      display: 'flex',
      alignItems: 'center',
      color: theme.palette.common.white,
      padding: theme.spacing(0, 2),
    },
    footer: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      padding: theme.spacing(3),
      flex: 1,
      minHeight: '50vh',
    }
  }),
);

function Logo() {
  const theme = useTheme();

  return (
    <RouterLink to="/" style={{ color: theme.palette.common.white, textDecoration: 'none' }} title="Homepage">
      <Box component="span" display="flex" alignItems="center">
        <img alt="Sudo the Dog" src={logoImage} width={50} style={{ marginRight: theme.spacing(1) }} />
        <Typography variant="h6" component="div" noWrap>
          Sudo&apos;s Tools
        </Typography>
      </Box>
    </RouterLink>
  );
}

export default function DrawerLayout(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { sm } = useBreakpoints();

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
            <List>
              {routes.filter(route => route.menus?.indexOf('tools') > -1).map((route) => (
                <ListItem button component={LinkBehavior} href={route.path} key={route.title} title={route.title}>
                  <ListItemText primary={route.title} />
                </ListItem>
              ))}
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
            <Grid item xs={12} md={6} lg={3}>
              <Typography variant="h4" gutterBottom>
                Tools
              </Typography>
              {routes.filter(route => route.menus?.indexOf('tools') > -1).map((route) => (
                <RouterLink to={route.path} key={route.title}>
                  <Typography component="span" title={route.title} style={{ color: theme.palette.common.white }}>
                    <ListItemText primary={route.title} />
                  </Typography>
                </RouterLink>
              ))}
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Typography variant="h4" gutterBottom>
                Links
              </Typography>
              {routes.filter(route => route.menus?.indexOf('links') > -1).map((route) => (
                <RouterLink to={route.path} key={route.title}>
                  <Typography component="span" title={route.title} style={{ color: theme.palette.common.white }}>
                    <ListItemText primary={route.title} />
                  </Typography>
                </RouterLink>
              ))}
            </Grid>
          </Grid>
        </footer>
      </div>
    </div>
  );
}
