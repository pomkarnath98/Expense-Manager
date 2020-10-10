import React from 'react'
import { Link } from "react-router-dom"

function NavBar() {
    return (
        <div> 
            <div className="container text-center mt-5 mb-4">
                <h3  className="text-muted"style={{fontWeight:"bolder",fontFamily:"sans-serif"}}>Expense Manager</h3>
            </div>
            <div className="container" style={{textDecoration: "none",marginLeft:"34%"}}>
                <div className="row ">
                    <div className="col-lg-2 p-2 text-center" style={{backgroundColor:"white",fontWeight:"bold",fontFamily:"sans-serif"}}><Link style={{textDecoration: "none"}} className="text-muted" to="/">Login</Link></div>
                    <div className="col-lg-2 p-2 text-center" style={{backgroundColor:"white",fontWeight:"bold",fontFamily:"sans-serif"}}><Link style={{textDecoration: "none"}} className="text-muted" to="/signup">Sign Up</Link></div>
                </div>
            </div>
            
        </div>
    )
}

export default NavBar
