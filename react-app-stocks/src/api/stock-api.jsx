const basePath = "https://finnhub.io/api/v1";

export const searchSymbols = async (query) => {
  const url = `${basePath}/search?q=${query}&token=cf7ushiad3i8qmbtg260cf7ushiad3i8qmbtg26g`;
  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
};

export const fetchStockDetails= async (stockSymbol) => {
  const url = `${basePath}/stock/profile2?symbol=${stockSymbol}&token=cf7ushiad3i8qmbtg260cf7ushiad3i8qmbtg26g`;
  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
};

export const fetchQuote= async (stockSymbol) => {
    const url = `${basePath}/quote?symbol=${stockSymbol}&token=cf7ushiad3i8qmbtg260cf7ushiad3i8qmbtg26g`;
    const response = await fetch(url);
  
    if (!response.ok) {
      const message = `An error has occured: ${response.status}`;
      throw new Error(message);
    }
  
    return await response.json();
  };

