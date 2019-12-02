import React, { Fragment, useCallback, useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { LinearProgress } from '@material-ui/core';

import API from '../../../api';
import Controls from '../../controls';
import Liquidity from '../../liquidity';
import Overview from '../../overview';
import { Tabs, TabPanel } from '../../tabs';
import useStyles from '../styles';

import mock from '../../../mock';

const App = () => {
  const [appData, setAppData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [totalItems, setTotalItems] = useState(10);
  const setTotalItemsCallback = useCallback(setTotalItems, []);
  const classes = useStyles();

  /**
   * Rename this method to `fetchData` if API will be unresponsive
   * to work with mocked data.
   */
  async function fetchLocalData(params) {
    const data = await new Promise(res => {
      setTimeout(() => {
        res(mock.slice(0, params.limit));
      }, 0);
    });

    setAppData(data);
    setIsLoading(false);
  }

  /**
   * Comment this method if API will be unresponsive
   * to work with mocked data.
   */
  async function fetchData(params) {
    try {
      const response = await API.get('/coins', { params });

      setAppData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.error(error);
    }
  }

  useEffect(() => {
    const requestParams = {
      limit: totalItems
    };

    fetchData(requestParams);
  }, [totalItems]);

  return (
    <BrowserRouter>
      <Route
        path="/"
        render={({ location }) => (
          <Fragment>
            <Tabs location={location} />
            <Controls
              setTotalItems={setTotalItemsCallback}
              totalItems={totalItems}
            />
            <div className={classes.progress}>
              {isLoading && <LinearProgress />}
            </div>
            <Switch>
              <Route
                path="/liquidity"
                render={() => (
                  <TabPanel index={1}>
                    {appData && <Liquidity appData={appData} />}
                  </TabPanel>
                )}
              />
              <Route
                path="/"
                render={() => (
                  <TabPanel index={0}>
                    {appData && <Overview appData={appData} />}
                  </TabPanel>
                )}
              />
            </Switch>
          </Fragment>
        )}
      />
    </BrowserRouter>
  );
};

export default App;
