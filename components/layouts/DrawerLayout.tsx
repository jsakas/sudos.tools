import ButtonLink from '@components/button-link/ButtonLink';
import Sentry from '@integrations/Sentry';
import { Button } from '@material-ui/core';
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
import getConfig from 'next/config';
import Link from 'next/link';
import React from 'react';

const { publicRuntimeConfig } = getConfig();

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
    <Link href="/">
      <a style={{ color: theme.palette.common.white, textDecoration: 'none' }} title="Homepage">
        <Box component="span" display="flex" alignItems="center">
          <img src="/sudo.png" width={50} style={{ marginRight: theme.spacing(1) }} />
          <Typography variant="h6" component="div" noWrap>
            Sudo&apos;s Tools
          </Typography>
        </Box>
      </a>
    </Link>
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

  const navItems = [
    {
      label: 'CSS to JSS',
      to: '/css-to-jss'
    },
    {
      label: 'Markdown to HTML',
      to: '/markdown-to-html'
    },
    {
      label: 'Markdown to React',
      to: '/markdown-to-react'
    },
    // {
    //   label: 'SVG to React',
    //   to: '/svg-to-react'
    // },
    // {
    //   label: 'JSON Diff',
    //   to: '/json-diff'
    // },
    {
      label: 'SQL Formatter',
      to: '/format-sql',
    },
    {
      label: 'XML Formatter',
      to: '/format-xml',
    },
    {
      label: 'Base64 Encode',
      to: '/base64-encode'
    },
    {
      label: 'Base64 Decode',
      to: '/base64-decode'
    }
  ];

  const legalItems = [
    {
      label: 'About',
      to: '/about'
    },
    {
      label: 'Privacy Policy',
      to: '/privacy-policy'
    },
    {
      label: 'Cookie Policy',
      to: '/cookie-policy'
    },
  ];

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

          {sm && (
            <Button
              style={{ marginLeft: 'auto' }}
              variant="contained"
              onClick={() => {
                Sentry.showReportDialog({
                  dsn: publicRuntimeConfig.sentryDsn,
                  title: 'Got a suggestion?',
                  subtitle: 'We\'d love to hear your feedback on how we can improve Sudo\'s Tools.',
                  subtitle2: '',
                  labelComments: 'Your feedback'
                });
              }}
            >
              Send Feedback
            </Button>
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
              {navItems.map((item) => (
                <ListItem button component={ButtonLink} href={item.to} key={item.label} title={item.label}>
                  <ListItemText primary={item.label} />
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
              {navItems.map((item) => (
                <Link href={item.to} key={item.label}>
                  <a>
                    <Typography component="a" title={item.label}>
                      <ListItemText primary={item.label} />
                    </Typography>
                  </a>
                </Link>
              ))}
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Typography variant="h4" gutterBottom>
                Links
              </Typography>
              {legalItems.map((item) => (
                <Link href={item.to} key={item.label}>
                  <a>
                    <Typography title={item.label}>
                      <ListItemText primary={item.label} />
                    </Typography>
                  </a>
                </Link>
              ))}
            </Grid>
          </Grid>
        </footer>
      </div>
    </div>
  );
}
