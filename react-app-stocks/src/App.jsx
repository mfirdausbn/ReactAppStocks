import { useState } from "react";
import "./App.css";
import Chart from "./components/Chart";
import Dashboard from "./components/Dashboard";
import StockContext from "./context/StockContext";
import { Route, Routes } from "react-router-dom";
import News from "./components/News";
import NavBar from "./components/NavBar";
import ChartPage from "./pages/ChartPage";


function App() {
  const [stockSymbol, setStockSymbol] = useState("AAPL");
  return (
    <StockContext.Provider value={{ stockSymbol, setStockSymbol }}>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route path="/chart" element={<ChartPage />} />

        <Route path="/news" element={<News />} />
      </Routes>
    </StockContext.Provider>
  );
}

export default App;
