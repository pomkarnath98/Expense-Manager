import React , { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loginUser } from '../Redux/action'
import NavBar from './NavBar'


function Login(props) {
    const dispatch = useDispatch()
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const handleSubmit =  (e)=>{
        e.preventDefault()
        dispatch(loginUser({email,password}))
        props.history.push("/dashboard")
    }
    return (
        <div >
            <NavBar/>
            <div className="row">
                <div className="col">

                </div>
            </div>
            <div className="container text-center" style={{width:"34%",marginbottom:"100px"}}>
            <form style={{backgroundColor:"white",padding:"0 10% 10% 10%"}} onSubmit={handleSubmit}>
                <br/>
                <div className="form-group">
                  
                  <input type="email" style={{backgroundColor:"#fffcc8",border:"none"}} className="form-control shadow-sm" value={email} onChange={(e)=>setEmail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" required />
                    
                </div>
                <div className="form-group">
                    
                    <input type="password" style={{backgroundColor:"#fffcc8",border:"none"}} value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control shadow-sm" id="exampleInputPassword1" placeholder="Password" required />
                    
                </div>
                <button type="submit" className="btn btn-primary bg-success" >Submit</button>
            </form>
            

            </div>
           
            
        </div>
    )
}

export default Login
