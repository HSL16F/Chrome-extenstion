// Define the endpoint for the API
const endpoint = 'https://query1.finance.yahoo.com/v8/finance/chart/';

// Define the stock symbol and timeframe for the request
const symbol = 'AAPL'; // Apple Inc.
const interval = '1d'; // 1 day interval
const range = '6mo'; // 6 month timeframe

// Construct the URL for the API request
const url = `${endpoint}${symbol}?interval=${interval}&range=${range}`;

// Make the API request
fetch(url)
  .then(response => response.json())
  .then(data => {
    // Extract the stock data from the response
    const stockData = data.chart.result[0];

    // Do something with the stock data, such as display it on a chart
    console.log(stockData);
  })
  .catch(error => {
    console.error(error);
  });
