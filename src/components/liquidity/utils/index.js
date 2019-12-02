const textStyle = {
  fontSize: 10,
  fontName: 'Roboto',
  color: 'black',
  bold: false,
  italic: false
};
const titleTextStyle = {
  ...textStyle,
  fontSize: 18
};

export const getTableOptions = (hLog, vLog) => ({
  hAxis: {
    title: 'Market Capitalization',
    scaleType: hLog ? 'log' : 'normal',
    format: 'short',
    textStyle,
    titleTextStyle
  },
  vAxis: {
    title: 'Volume',
    scaleType: vLog ? 'log' : 'normal',
    format: 'short',
    textStyle,
    titleTextStyle
  },
  bubble: {
    textStyle: {
      ...textStyle,
      color: 'white',
      auraColor: 'none'
    }
  },
  legend: {
    textStyle
  },
  explorer: {
    actions: ['dragToZoom', 'rightClickToReset'],
    keepInBounds: true,
    maxZoomIn: 100,
    zoomDelta: 20
  },
  animation: {
    duration: 1000,
    easing: 'out',
    startup: true
  }
});

export const transformData = data => [
  [
    'Coin symbol',
    'Capitalization',
    'Volume',
    'Coin name',
    'Absolute price change',
  ],
  ...data.map(({ symbol, quote, name }) => [
    symbol,
    Math.floor(quote.USD.market_cap),
    Math.floor(quote.USD.volume_24h),
    name,
    quote.USD.percent_change_24h
  ])
];
