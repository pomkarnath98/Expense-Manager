import React from 'react'
import { Link } from "react-router-dom"
import style from "./nav.module.css"

function NavBar() {
    return (
        <div > 
             
            <div className="container text-center mt-4 mb-4">
                <h3   className={style.navHeader}>Expense Manager</h3>
            </div>
            <div className="container" style={{marginLeft:"62%"}}>
                <div className="row " >
                    <div className="col-lg-2 p-2 text-center"  style={{backgroundColor:"white",fontWeight:"bold",fontFamily:"sans-serif"}}><Link style={{textDecoration: "none"}} className="text-muted" to="/">Login</Link></div>
                    <div className="col-lg-2 p-2 text-center" style={{backgroundColor:"white",fontWeight:"bold",fontFamily:"sans-serif"}}><Link style={{textDecoration: "none"}} className="text-muted" to="/signup">Sign Up</Link></div>
                </div>
            </div>
            
        </div>
    )
}

export default NavBar
