import classes from "./StockItem.module.css";

export default function StockItem(props) {
  return (
    <div className={classes.container}>
      <div className={classes.info}>
        <h3>AAPL</h3>
        <p>Apple Inc.</p>
      </div>
      <div>
        <h3>4,212.33</h3>
        <p>-33.55</p>
      </div>
    </div>
  );
}
