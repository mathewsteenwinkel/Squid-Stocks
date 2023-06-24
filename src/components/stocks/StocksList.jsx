import StockItem from "./StockItem";
import classes from "./StocksList.module.css";

export default function StocksList(props) {
  return (
    <div className={classes.container}>
      <ul>
        <li>
          <StockItem />
        </li>
        <li>
          <StockItem />
        </li>
        <li>
          <StockItem />
        </li>
      </ul>
    </div>
  );
}
