import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { Paper, Table, TablePagination } from '@material-ui/core';

import TableBody from './TableBodyComponent';
import TableHead from './TableHeadComponent';
import { createData } from '../utils';
import useStyles from '../styles';

const EnhancedTable = ({ appData }) => {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const rows = useMemo(
    () => appData.map(row => createData(row)),
    [appData]
  );
  const classes = useStyles();

  function handleRequestSort(event, property) {
    const isDesc = orderBy === property && order === 'desc';

    setOrder(isDesc ? 'asc' : 'desc');
    setOrderBy(property);
  }

  function handleChangePage(event, newPage) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  }

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <div className={classes.tableWrapper}>
          <Table
            aria-label="enhanced table"
            aria-labelledby="tableTitle"
            className={classes.table}
            size="medium"
          >
            <TableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody
              emptyRows={emptyRows}
              order={order}
              orderBy={orderBy}
              page={page}
              rows={rows}
              rowsPerPage={rowsPerPage}
            />
          </Table>
        </div>
        <TablePagination
          component="div"
          count={rows.length}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
          page={page}
          rowsPerPage={rowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </Paper>
    </div>
  );
};

EnhancedTable.propTypes = {
  appData: PropTypes.arrayOf(PropTypes.shape()).isRequired
};

export default EnhancedTable;
