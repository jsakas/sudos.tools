import useRouter from '@hooks/useRouter';
import logoImage from '@images/sudo-sm.png';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import { styled, useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useBreakpoints from 'hooks/useBreakpoints';
import React, { useEffect } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import routes from '../../routes';
import { Footer } from './components/Footer';
import ToolList from './components/ToolList';

const drawerWidth = 240;

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  [theme.breakpoints.up('sm')]: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
}));

const StyledMenuButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

const StyledDrawer = styled('nav')(({ theme }) => ({
  width: drawerWidth,
  [theme.breakpoints.up('sm')]: {
    width: drawerWidth,
    flexShrink: 0,
  },
}));

const StyledContentWrapper = styled('div')(() => ({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
}));

const StyledContent = styled('div')(() => ({
  flex: '1 1 auto',
  minHeight: '100vh',
}));

const MobileToolbar = styled('div')(({ theme }) => ({
  ...theme.mixins.toolbar,
  background: theme.palette.primary.main,
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.common.white,
  padding: theme.spacing(0, 2),
  position: 'fixed',
  width: drawerWidth,
  zIndex: 10,
}));

const StyledRoot = styled('div')(() => ({
  display: 'flex',
  minHeight: '100vh',
}));

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

export type DrawerLayoutProps = {
  children?: React.ReactNode;
}

function DrawerLayout(props: DrawerLayoutProps) {
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

  return (
    <StyledRoot>
      <CssBaseline />
      <StyledAppBar position="fixed">
        <Toolbar>
          <StyledMenuButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </StyledMenuButton>
          {!sm && (
            <Logo />
          )}
          {md && (
            <Typography>
              Free online tools for developers
            </Typography>
          )}
        </Toolbar>
      </StyledAppBar>
      <StyledDrawer aria-label="Website Navigation">
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            ['& .MuiDrawer-paper']: { width: drawerWidth, boxSizing: 'border-box' },
          }}
          variant={sm ? 'permanent' : 'temporary'}
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          <div>
            <MobileToolbar>
              <Logo />
            </MobileToolbar>
            <List
              style={{ paddingTop: 65 }}
              subheader={
                <ListSubheader component="div" id="nested-list-subheader" sx={{ backgroundColor: 'inherit' }}>
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
              <ToolList
                title="Misc"
                routes={routes.filter(route => route.menus?.indexOf('misc') > -1)}
              />
            </List>
          </div>
        </Drawer>
      </StyledDrawer>
      <StyledContentWrapper>
        <StyledContent>
          <Toolbar />
          {props.children}
        </StyledContent>
        <Footer />
      </StyledContentWrapper>
    </StyledRoot>
  );
}

export default React.memo(DrawerLayout);