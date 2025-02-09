async function fetchStockData() {
  const minMarketCap = document.getElementById("min-market-cap").value;

  // Replace with actual stock data API
  const apiKey = 'CJA9N87L5NMFT7UU';  // Get API key from a stock data provider
  const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AAPL&apikey=${apiKey}`;

  const response = await fetch(url);
  const data = await response.json();

  // Example: populate the table with stock data
  const stockData = data['Time Series (Daily)'];
  let table = document.getElementById('stock-table').getElementsByTagName('tbody')[0];

  // Clear existing table rows
  table.innerHTML = "";

  // Example: adding data to the table
  if (stockData) {
    const stock = stockData[Object.keys(stockData)[0]]; // Latest stock data
    const row = table.insertRow();
    row.insertCell(0).textContent = "AAPL";  // Stock Symbol
    row.insertCell(1).textContent = "Apple Inc.";  // Company Name
    row.insertCell(2).textContent = stock['4. close'];  // Stock Price
    row.insertCell(3).textContent = "2 Trillion USD";  // Mock Market Cap
  }
}
