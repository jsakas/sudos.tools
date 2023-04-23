import { useMediaQuery, useTheme } from '@mui/material';

export default function useBreakpoints() {
  const theme = useTheme();
  const xs = useMediaQuery(theme.breakpoints.up('xs'));
  const sm = useMediaQuery(theme.breakpoints.up('sm'));
  const md = useMediaQuery(theme.breakpoints.up('md'));
  const lg = useMediaQuery(theme.breakpoints.up('lg'));
  const xl = useMediaQuery(theme.breakpoints.up('xl'));

  return {
    xs,
    sm,
    md,
    lg,
    xl
  };
}
