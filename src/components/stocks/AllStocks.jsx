import SearchStock from "../Search";
import StocksList from "./StocksList";

import classes from "./AllStocks.module.css";

export default function AllStocks(props) {
  return (
    <div className={classes.container}>
      <SearchStock />
      <StocksList />
    </div>
  );
}
