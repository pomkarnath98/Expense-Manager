import React, { Component } from "react";
import style from "./nav.module.css";

export class Dashboard extends Component {
  render() {
    return (
      <div>
        <div className="container text-center mt-3">
          <h3 className={style.navHeader}>Expense Manager</h3>
          <div className="row">
            <div className="col-lg-4 shadow-sm p-3 mb-5 mx-1 bg-white rounded">
              <h5>Total Income</h5>
              <div>₹1500</div>
            </div>
            <div className="col-lg-3 shadow-sm p-3 mb-5 mx-1 bg-white rounded">
              <h5>Balance</h5>
              <div>₹900</div>
            </div>
            <div className="col-lg-4 shadow-sm p-3 mb-5 mx-1 bg-white rounded ">
              <h5>Total Expense</h5>
              <div>₹600</div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-3">
              <button className="rounded bg-white text-success">
                Add Transaction
              </button>
            </div>
            <div className="col-lg-8">HERE WILL PUT LATEST 5 Transaction</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
