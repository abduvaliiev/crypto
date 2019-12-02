import React from 'react';
import PropTypes from 'prop-types';
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';

import useStyles from '../styles';

const ExpansionPanelComponent = ({ items }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {items.map((item, index) => (
        <ExpansionPanel key={item.title}>
          <ExpansionPanelSummary
            expandIcon={<ExpandMore />}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
          >
            <Typography className={classes.heading}>
              {item.title}
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            {item.content}
          </ExpansionPanelDetails>
        </ExpansionPanel>
      ))}
    </div>
  );
};

ExpansionPanelComponent.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape()).isRequired
};

export default ExpansionPanelComponent;
