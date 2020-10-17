import React from 'react'
import { Link } from "react-router-dom"
import style from "./nav.module.css"

function NavBar() {
    return (
        <div > 
             
            <div className="container text-center mt-4">
                <h3   className={style.navHeader}>Expense Manager</h3>
            
            <div className="container text-center" style={{margin:"0 auto", width:"318px"}}>
                <div className="row " >
                    <div className="col-lg-6 p-2 text-center"  style={{backgroundColor:"white",fontWeight:"bold",fontFamily:"sans-serif"}}><Link style={{textDecoration: "none"}} className="text-muted" to="/">Login</Link></div>
                    <div className="col-lg-6 p-2 text-center" style={{backgroundColor:"white",fontWeight:"bold",fontFamily:"sans-serif"}}><Link style={{textDecoration: "none"}} className="text-muted" to="/signup">Sign Up</Link></div>
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default NavBar
