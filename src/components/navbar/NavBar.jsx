import React from "react";
import classes from "./NavBar.modules.css";

export default function NavBar() {
  return (
    <>
      <div className="navBar">
        <img className={classes.logo} src="SquidStock.png" />
        <div className="">
          <a className={classes.nav}>Home</a> <br />
          <a className={classes.nav}>Stocks</a>
          <br />
          <a className={classes.nav}>Servies</a>
          <br />
        </div>
        <button className="signUp"> sign up</button>
      </div>
    </>
  );
}
