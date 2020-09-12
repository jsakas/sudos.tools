import React from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { useTheme } from '@material-ui/core';



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
