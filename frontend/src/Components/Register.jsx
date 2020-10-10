import React from 'react'
import NavBar from "./NavBar"

function Register() {
    return (
        <div>
            <NavBar/>
            <div className="container text-center" style={{width:"34%",marginLeft:"32.7%"}}>
            <form style={{backgroundColor:"white",padding:"0 10% 10% 10%",borderRadius:"1%"}}>
                <br/>
                <div class="form-group">
                  
                  <input type="name" style={{backgroundColor:"#fffcc8",border:"none"}} class="form-control shadow-sm" aria-describedby="Name" placeholder="Name"/>
                    
                </div>
                <div class="form-group">
                  
                  <input type="email" style={{backgroundColor:"#fffcc8",border:"none"}} class="form-control shadow-sm"  aria-describedby="emailHelp" placeholder="Email"/>
                    
                </div>
                <div class="form-group">
                    
                    <input type="password" style={{backgroundColor:"#fffcc8",border:"none"}} class="form-control shadow-sm" placeholder="Password"/>
                    
                </div>
                <button type="submit" class="btn btn-primary bg-success">Create An Account</button>
            </form>
            </div>
            

        </div>
    )
}

export default Register
