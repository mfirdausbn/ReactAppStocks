import { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import StockContext from "./context/StockContext";
import { Route, Routes } from "react-router-dom";
import NewsPage from "./pages/NewsPage";
import NavBar from "./components/NavBar";
import ChartPage from "./pages/ChartPage";

function App() {
  const [stockSymbol, setStockSymbol] = useState("AAPL");
  return (
    <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/chart" element={<ChartPage />} />

        <Route path="/news" element={<NewsPage />} />
      </Routes>
    </StockContext.Provider>
  );
}

export default App;
