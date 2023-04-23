import { Box, Grid, ListItemText,Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import theme from '@src/theme';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import routes from 'routes';

const StyledFooter = styled('footer')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(3),
  flex: '1 1 auto',
}));

export function Footer() {
  return (
    <StyledFooter>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box marginBottom={theme.spacing(2)}>
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
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box marginBottom={theme.spacing(2)}>
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
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box marginBottom={theme.spacing(2)}>
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
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Box marginBottom={theme.spacing(2)}>
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
          </Box>

          <Box marginBottom={theme.spacing(2)}>
            <Typography variant="h4" gutterBottom>
                            Misc
            </Typography>
            {routes.filter(route => route.menus?.indexOf('misc') > -1).map((route) => (
              <RouterLink to={route.path} key={route.title} title={route.title}>
                <Typography component="span" title={route.title} style={{ color: theme.palette.common.white }}>
                  <ListItemText primary={route.title} />
                </Typography>
              </RouterLink>
            ))}
          </Box>
        </Grid>
      </Grid>
      <div style={{ marginTop: theme.spacing(6) }}>
        <Typography variant="caption">
                    &copy; Copyright 2020 Doubledrop, LLC
          {routes.filter(route => route.menus?.indexOf('links') > -1).map((route) => (
            <span key={route.path}>
                            &nbsp;&nbsp;|&nbsp;&nbsp;
              <Link component={RouterLink} to={route.path} key={route.title}>
                {route.title}
              </Link>
            </span>
          ))}
        </Typography>
      </div>
    </StyledFooter>
  );
}