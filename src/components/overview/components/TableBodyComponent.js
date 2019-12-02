import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { TableBody, TableCell, TableRow } from '@material-ui/core';

import { getSorting, stableSort } from '../utils';

const TableBodyComponent = ({
  emptyRows,
  order,
  orderBy,
  page,
  rows,
  rowsPerPage
}) => {
  const memoizedRows = useMemo(() => stableSort(rows, getSorting(order, orderBy))
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    .map(row => (
        <TableRow key={row.name}>
          <TableCell component="th" scope="row">
            {row.rank}
          </TableCell>
          <TableCell>{row.name}</TableCell>
          <TableCell align="right">{row.price}</TableCell>
          <TableCell align="right">{row.priceChange}</TableCell>
          <TableCell align="right">{row.marketCap}</TableCell>
          <TableCell align="right">{row.volume}</TableCell>
        </TableRow>
      )),
    [page, rowsPerPage, orderBy, order, rows]
  );

  return (
    <TableBody>
      {memoizedRows}
      {emptyRows > 0 && (
        <TableRow style={{height: 53 * emptyRows}}>
          <TableCell colSpan={6} />
        </TableRow>
      )}
    </TableBody>
  );
};

TableBodyComponent.propTypes = {
  emptyRows: PropTypes.number.isRequired,
  order: PropTypes.string.isRequired,
  orderBy: PropTypes.string,
  page: PropTypes.number.isRequired,
  rows: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  rowsPerPage: PropTypes.number.isRequired
};

export default TableBodyComponent;
