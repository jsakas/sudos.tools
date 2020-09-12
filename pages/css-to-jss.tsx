import { useTheme } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import React from 'react';



export default function Index() {
  const theme = useTheme();
 
  return (
    <>
      <Typography variant="h3" component="h1" gutterBottom>
       Convert CSS to React JSS
      </Typography>
      <Typography gutterBottom>
        Use this tool to convert CSS styles to new React JSS syntax.
      </Typography>
      <Divider style={{ margin: theme.spacing(2, 0 )}} />
    </>
  );
}
