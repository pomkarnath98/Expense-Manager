import React from 'react'
import NavBar from './NavBar'

function Login() {
    return (
        <div>
            <NavBar/>
            
            <div className="container text-center" style={{width:"34%",marginLeft:"32.6%"}}>
            <form style={{backgroundColor:"white",padding:"0 10% 10% 10%"}}>
                <br/>
                <div class="form-group">
                  
                  <input type="email" style={{backgroundColor:"#fffcc8",border:"none"}} class="form-control shadow-sm" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email"/>
                    
                </div>
                <div class="form-group">
                    
                    <input type="password" style={{backgroundColor:"#fffcc8",border:"none"}} class="form-control shadow-sm" id="exampleInputPassword1" placeholder="Password"/>
                    
                </div>
                <button type="submit" class="btn btn-primary bg-success">Submit</button>
            </form>
            

            </div>
           
            
        </div>
    )
}

export default Login
