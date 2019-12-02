function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) return -1;
  if (b[orderBy] > a[orderBy]) return 1;

  return 0;
}

export function createData(data) {
  const {
    cmc_rank: rank,
    name,
    quote: {
      USD: {
        price,
        percent_change_24h: priceChange,
        market_cap: marketCap,
        volume_24h: volume
      }
    }
  } = data;

  return {
    rank,
    name,
    price: price.toLocaleString(),
    priceChange,
    marketCap: Math.floor(marketCap).toLocaleString(),
    volume: Math.floor(volume).toLocaleString()
  };
}

export function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);

  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);

    if (order !== 0) return order;

    return a[1] - b[1];
  });

  return stabilizedThis.map(el => el[0]);
}

export function getSorting(order, orderBy) {
  return order === 'desc'
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy);
}
