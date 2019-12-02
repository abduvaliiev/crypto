import React, { Fragment, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { Chart } from 'react-google-charts';
import { Switch, FormGroup, FormControlLabel } from '@material-ui/core';

import { getTableOptions, transformData } from '../utils';
import Controls from './ControlsComponent';
import useStyles from '../styles';

const Liquidity = ({ appData }) => {
  const [hLog, setHLog] = useState(true);
  const [vLog, setVLog] = useState(true);
  const chartData = useMemo(
    () => transformData(appData),
    [appData]
  );
  const tableOptions = useMemo(
    () => getTableOptions(hLog, vLog),
    [hLog, vLog]
  );
  const classes = useStyles();

  return (
    <Fragment>
      <Controls
        items={[
          {
            title: 'Axes parameters',
            content: (
              <FormGroup row>
                <FormControlLabel
                  control={
                    <Switch
                      checked={hLog}
                      onChange={(event) => {
                        setHLog(event.target.checked)
                      }}
                      inputProps={{ 'aria-label': 'checkbox' }}
                    />
                  }
                  label="Logarithmic horizontal axis"
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={vLog}
                      onChange={(event) => {
                        setVLog(event.target.checked)
                      }}
                      inputProps={{ 'aria-label': 'checkbox' }}
                    />
                  }
                  label="Logarithmic vertical axis"
                />
              </FormGroup>
            )
          }
        ]}
      />
      <Chart
        chartType="BubbleChart"
        data={chartData}
        width="100%"
        height="600px"
        className={classes.chart}
        options={tableOptions}
        loader={<div>Loading Chart</div>}
      />
    </Fragment>
  );
};

Liquidity.propTypes = {
  appData: PropTypes.arrayOf(PropTypes.shape()).isRequired
};

export default Liquidity;
