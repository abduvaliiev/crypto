import React from 'react';
import PropTypes from 'prop-types';
import {
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel
} from '@material-ui/core';

import useStyles from '../styles';

const headCells = [
  { id: 'rank', right: false, label: 'Rank (#)' },
  { id: 'name', right: false, label: 'Name' },
  { id: 'price', right: true, label: 'Price (USD)' },
  { id: 'priceChange', right: true, label: 'Price change' },
  { id: 'marketCap', right: true, label: 'Market cap (USD)' },
  { id: 'volume', right: true, label: 'Volume' },
];

const TableHeadComponent = ({
  order,
  orderBy,
  onRequestSort
}) => {
  const classes = useStyles();

  function createSortHandler(property) {
    return (event) => {
      onRequestSort(event, property);
    };
  }

  return (
    <TableHead>
      <TableRow>
        {headCells.map(headCell => (
          <TableCell
            key={headCell.id}
            align={headCell.right ? 'right' : 'left'}
            sortDirection={
              orderBy === headCell.id
                ? order
                : false
            }
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={order}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id
                ? (
                  <span className={classes.visuallyHidden}>
                    {order === 'desc'
                      ? 'sorted descending'
                      : 'sorted ascending'
                    }
                  </span>
                )
                : null
              }
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

TableHeadComponent.propTypes = {
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string,
  rowCount: PropTypes.number.isRequired
};

export default TableHeadComponent;
