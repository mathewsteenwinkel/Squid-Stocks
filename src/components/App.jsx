import Layout from "./layout/Layout.js";

import StockDesc from "./stocks/StockDescription.jsx"
import AllStocks from "./stocks/AllStocks.jsx";

import classes from "./App.module.css";

function App() {
  return (
    <Layout>
      <main className={classes.main}>
      <AllStocks />
      <StockDesc />
      </main>
    </Layout>
  );
}

export default App;
