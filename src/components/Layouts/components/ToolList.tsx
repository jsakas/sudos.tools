import LinkBehavior from '@components/LinkBehavior/LinkBehavior';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@mui/material/styles';
import React from 'react';

type ToolListProps = {
    title: string;
    routes: any[];
}

const ToolList: React.FC<ToolListProps> = (props: ToolListProps) => {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary={(<span style={{ color: 'rgba(0, 0, 0, 0.75)' }}>{props.title}</span>)} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {props.routes.map((route) => (
            <ListItemButton component={LinkBehavior} href={route.path} key={route.title} title={route.title} style={{ paddingLeft: theme.spacing(4) }}>
              <ListItemText primary={route.title} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </>
  );
};

export default React.memo(ToolList);
