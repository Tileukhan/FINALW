async function fetchAndPlotStockData(symbol) {
    const response = await fetch(`/api/stocks/${symbol}`);
    const data = await response.json();

    const dates = Object.keys(data);
    const closingPrices = dates.map(date => data[date]['4. close']);

    const plotData = [{
        x: dates,
        y: closingPrices,
        type: 'scatter',
        mode: 'lines+markers',
        marker: {color: 'red'},
    }];

    Plotly.newPlot('stockChart', plotData, {title: `Stock Prices: ${symbol}`});
}

fetchAndPlotStockData('AAPL'); // Example: Fetch and plot Apple Inc. stock data




