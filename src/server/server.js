var proxy = require('express-http-proxy');
var cors = require('cors');
var app = require('express')();

const PORT = 8080;
const API_KEY = '67fc823f-4baf-42b7-a11b-8ac971d6a55d';
const BASE_URL = 'https://sandbox-api.coinmarketcap.com';
const BASE_PATH = '/v1/cryptocurrency/listings/latest';

app.use(cors());
app.use('/coins', proxy(`${BASE_URL}`, {
  proxyReqOptDecorator: (proxyRequestOptions) => {
    proxyRequestOptions.headers['X-CMC_PRO_API_KEY'] = API_KEY;

    return proxyRequestOptions;
  },
  proxyReqPathResolver: (req) => {
    const [, paramsString] = req.url.split('?');
    const urlSearchParams = new URLSearchParams(paramsString);

    // if limit equals -1 - then load all data
    if (urlSearchParams.get('limit') === '-1') {
      urlSearchParams.delete('limit');
    }

    return `${BASE_PATH}?${urlSearchParams.toString()}`;
  }
}));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
