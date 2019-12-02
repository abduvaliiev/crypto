import React from 'react';
import PropTypes from 'prop-types';
import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select
} from '@material-ui/core';

import useStyles from '../styles';

const Controls = ({ totalItems, setTotalItems }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Grid
        container
        justify="center"
      >
        <FormControl className={classes.formControl}>
          <InputLabel id="total-select-label">
            Total items
          </InputLabel>
          <Select
            id="total-select"
            labelId="total-select-label"
            onChange={(event) => {
              setTotalItems(event.target.value);
            }}
            value={totalItems}
          >
            <MenuItem value={10}>
              10
            </MenuItem>
            <MenuItem value={50}>
              50
            </MenuItem>
            <MenuItem value={-1}>
              All
            </MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Paper>
  );
};

Controls.propTypes = {
  setTotalItems: PropTypes.func.isRequired,
  totalItems: PropTypes.number.isRequired
};

export default Controls;
