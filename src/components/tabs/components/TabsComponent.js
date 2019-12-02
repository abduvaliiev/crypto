import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Tab, Tabs } from '@material-ui/core';
import { BusinessCenter, InsertChart } from '@material-ui/icons';
import { Link } from 'react-router-dom';

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const TabsComponent = ({ location }) => (
  <AppBar position="static">
    <Tabs
      aria-label="application tabs"
      centered
      value={location.pathname}
    >
      <Tab
        {...a11yProps(0)}
        component={Link}
        icon={<BusinessCenter />}
        label="Overview"
        to="/"
        value="/"
      />
      <Tab
        {...a11yProps(1)}
        component={Link}
        icon={<InsertChart />}
        label="Liquidity"
        to="/liquidity"
        value="/liquidity"
      />
    </Tabs>
  </AppBar>
);


TabsComponent.propTypes = {
  location: PropTypes.shape().isRequired
};

export default TabsComponent;
