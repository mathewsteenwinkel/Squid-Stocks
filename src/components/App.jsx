import Layout from "./layout/Layout.js";

import StockDesc from "./stocks/StockDescription.jsx"
import StocksList from "./stocks/StocksList.jsx";

import classes from "./App.module.css";

function App() {
  return (
    <Layout>
      <main className={classes.main}>
      <StocksList />
      <StockDesc />
      </main>
    </Layout>
  );
}

export default App;
