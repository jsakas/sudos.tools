import LinkBehavior from '@components/link-behavior/LinkBehavior';
import Collapse from '@material-ui/core/Collapse';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import React from 'react';

const useStyles = makeStyles((theme) => ({

  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

type ToolListProps = {
    title: string;
    routes: any[];
}

const ToolList: React.FC<ToolListProps> = (props: ToolListProps) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemText primary={(<span style={{ color: 'rgba(0, 0, 0, 0.75)' }}>{props.title}</span>)} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {props.routes.map((route) => (
            <ListItem button component={LinkBehavior} href={route.path} key={route.title} title={route.title} className={classes.nested}>
              <ListItemText primary={route.title} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </>
  );
};

export default React.memo(ToolList);
