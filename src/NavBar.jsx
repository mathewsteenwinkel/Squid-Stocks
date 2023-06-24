import React from "react";
import './NavBar.css'
import API from "./APIcall";

export default function NavBar() {

  return (
    <>
      <div className="navBar">
        <img className="logo" src="SquidStock.png" />
        <div className="">
          <a className="nav">Home</a> <br/>
          <a className="nav">Stocks</a><br/>
          <a className="nav">Servies</a><br/>
        </div>
        <button className="signUp"> sign up</button>
      </div>

      <div>
        <API/>
      </div>
    </>
  )
}