This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Starts proxy server (port 8080) and runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Proxy server was created, because coinmarketcap has limits for API usage:

[coinmarketcap API page](https://coinmarketcap.com/api/documentation/v1/#section/Quick-Start-Guide)

`
Making HTTP requests on the client side with Javascript is currently prohibited through CORS configuration. This is to protect your API Key which should not be visible to users of your application so your API Key is not stolen. Secure your API Key by routing calls through your own backend service.
`

If for some reason you will experience any problems with retrieving data from remote API, just rename `fetchLocalData` in `AppComponent.js` to `fetchData`.
