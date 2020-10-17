import Axios from "axios";
import React, { Component } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from "./nav.module.css";

export const Dashboard = ()=> {
   const [data,setData] = useState([])
   const state = useSelector(state=>state)
   const [amount,setAmount] = useState({})
   useEffect(()=>{
       const getData = async()=>{
          await Axios.get("http://localhost:9000/api/fivetransaction/"+state.user).then(res=>res.data).then(res=>setData(res)).catch(err=>console.log(err))
       }
       const getAmount = async ()=>{
        await Axios.get("http://localhost:9000/api/summary/"+state.user).then(res=>res.data).then(res=>setAmount(res)).catch((err)=>console.log(err))
       }
       getAmount()
       getData()
   },[state])
   console.log(amount)
        return (
            <div>
                <div className="container text-center mt-3">
                    <h3   className={style.navHeader}>Expense Manager</h3>
                    <div className="row">
                        <div className="col-lg-4 shadow-sm p-3 mb-5 mx-1  rounded" style={{backgroundColor:"#fffcc8"}}>
                            <h5>Total Income</h5>
                            <div>₹{amount && amount.totalIncome}</div>
                        </div>
                        <div className="col-lg-3 shadow-sm p-3 mb-5 mx-1 rounded" style={{backgroundColor:"#fffcc8"}}>
                            <h5>Balance</h5>
                            <div>₹{amount && amount.balance}</div>
                        </div>
                        <div className="col-lg-4 shadow-sm p-3 mb-5 mx-1  rounded " style={{backgroundColor:"#fffcc8"}}>
                            <h5>Total Expense</h5>
                            <div>₹{amount && amount.totalExpense}</div>
                        </div>
                    </div>
                </div>
                <div className="container">
                <div className="text-center"><Link to='/ledger'><button className="rounded bg-white text-success">ALL Transactions</button></Link></div>
                    <div className="row text-center">
                       
                        <div>
                          <div className="col-lg-4 mx-5"><button className="rounded bg-white text-success">Add Transaction</button></div>
                          
                          
                        </div>
                        <div className="col-lg-6 mx-3">
                        <div>
                        {data && data.map(item=><div key={item.id}  style={{backgroundColor:"#fffcc8",padding:10,display:"flex",justifyContent :"space-around",margin:"10px"}}>
                           <div> {item.title}</div>
                           <div> {item.amount}</div> 
                           <div> {item.type}</div> 
                           <div> {item.date}</div>  </div>)}
                        </div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
  );
};

export default Dashboard;
