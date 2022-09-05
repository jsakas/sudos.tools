import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import { useTheme } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import React, {  } from 'react';

import { ConfigurationOptionsAction } from './RenderTool';

type RenderOptionsProps = {
  options: ConfigurationOptions;
  dispatch: React.Dispatch<ConfigurationOptionsAction>;
}

const RenderOptions: React.FC<RenderOptionsProps> = (props) => {
  const { options, dispatch } = props;

  return (
    <div>
      {
        Object.keys(options).map(optionKey => {
          const option = options[optionKey];

          return <RenderOption key={optionKey} option={option} dispatch={dispatch} />;
        })
      }
    </div>
  );
};

type RenderOptionProps = {
  option: ConfigurationOption;
  dispatch: React.Dispatch<ConfigurationOptionsAction>;
}

const RenderOption: React.FC<RenderOptionProps> = (props) => {
  const theme = useTheme();
  const { option, dispatch } = props;

  if (option.type === 'heading') {
    return (
      <Typography component="h3" variant="h5">
        {option.value}
      </Typography>
    );
  }

  if (option.type === 'button_group') {
    return (
      <Box key={option.id} width="100%" style={{ margin: theme.spacing(2, 0) }}>
        <FormControl fullWidth>
          <FormLabel
            style={{
              transform: 'scale(.75)',
              transformOrigin: 'top left'
            }}
          >
            {option.name}
          </FormLabel>
          <ButtonGroup color="primary" aria-label={`Change ${option.name}`}>
            {
              option.options.map(o => {
                return (
                  <Button
                    key={o.id}
                    color="secondary"
                    variant={option.value === o.value ? 'contained' : 'outlined'}
                    onClick={() => dispatch({
                      type: 'UPDATE_KEY',
                      id: option.id,
                      value: o.value,
                    })
                    }>
                    {o.label}
                  </Button>
                );
              })
            }
          </ButtonGroup>
        </FormControl>
      </Box>
    );
  }

  if (option.type === 'boolean') {
    return (
      <Box key={option.id} width="100%" style={{ margin: theme.spacing(2, 0) }}>
        <FormGroup>
          <FormControlLabel
            label={option.name}
            control={
              <Switch
                checked={option.value as boolean}
                onChange={() => dispatch({
                  type: 'UPDATE_KEY',
                  id: option.id,
                  value: !option.value
                })}
              />
            }
          />
        </FormGroup>
      </Box>
    );
  }

  if (option.type === 'select') {
    return (
      <Box key={option.id} width="100%" style={{ margin: theme.spacing(2, 0) }}>
        <FormControl fullWidth>
          <InputLabel>{option.name}</InputLabel>
          <Select
            native
            value={option.value}
            onChange={(event) => dispatch({
              type: 'UPDATE_KEY',
              id: option.id,
              value: event.target.value as string
            })}
          >
            {
              option.options.map(o => {
                return (
                  <option key={o.value} value={o.value}>{o.label}</option>
                );
              })
            }
          </Select>
        </FormControl>
      </Box>
    );
  }
  return null;
};

export default RenderOptions;