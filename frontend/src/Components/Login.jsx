import React , { useState, useEffect } from 'react'
import NavBar from './NavBar'


function Login() {
    return (
        <div >
            <NavBar/>
            <div className="row">
                <div className="col">

                </div>
            </div>
            <div className="container text-center" style={{width:"34%",marginbottom:"100px"}}>
            <form style={{backgroundColor:"white",padding:"0 10% 10% 10%"}}>
                <br/>
                <div className="form-group">
                  
                  <input type="email" style={{backgroundColor:"#fffcc8",border:"none"}} className="form-control shadow-sm" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" required />
                    
                </div>
                <div className="form-group">
                    
                    <input type="password" style={{backgroundColor:"#fffcc8",border:"none"}} className="form-control shadow-sm" id="exampleInputPassword1" placeholder="Password" required />
                    
                </div>
                <button type="submit" className="btn btn-primary bg-success">Submit</button>
            </form>
            

            </div>
           
            
        </div>
    )
}

export default Login
