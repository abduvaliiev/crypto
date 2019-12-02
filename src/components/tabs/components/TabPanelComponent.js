import React from 'react';
import { Box, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const TabPanel = ({ children, index, ...other }) => (
  <Typography
    aria-labelledby={`app-panel-${index}`}
    component="div"
    id={`app-panel-${index}`}
    role="tabpanel"
    {...other}
  >
    <Box p={3}>
      {children}
    </Box>
  </Typography>
);

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired
};

export default TabPanel;
