import React, {useState} from 'react'
import NavBar from "./NavBar"
import style from "./nav.module.css"
import { useDispatch, useSelector } from "react-redux"
import { alerttype, fetchDetails, fetchregisterDetails } from "../Redux/action"

function Register() {
    const [data,setData] = useState({name:"",email:"",password:""})
     const dispatch = useDispatch()
     const selector = useSelector(state => state.data)

    const handleChange = (e)=>{
        setData({
            ...data,[e.target.name]:e.target.value
        })
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log(data)
        dispatch(fetchDetails())
        dispatch(fetchregisterDetails(data))
    }
    console.log(data.name,data.email,data.password)
    return (
        <div  className={style.background}>
            <NavBar/>
            <div className="container text-center" style={{width:"34%",marginLeft:"60.7%"}}>
            <form  style={{backgroundColor:"white",padding:"0 10% 10% 10%",borderRadius:"1%"}}>
                <br/>
                <div class="form-group">
                  
                  <input 
                  type="text"
                  style={{backgroundColor:"#fffcc8",border:"none"}} 
                  class="form-control shadow-sm" 
                  aria-describedby="Name" 
                  placeholder="Name"
                  name="name"
                  value={data.name}
                  onChange={handleChange}/>
                  
                    
                </div>
                <div class="form-group">
                  
                  <input type="email" 
                  style={{backgroundColor:"#fffcc8",border:"none"}} 
                  class="form-control shadow-sm"  
                  aria-describedby="emailHelp" 
                  placeholder="Email"
                  name="email"
                  value={data.email}
                  onChange={handleChange}/>
                    
                </div>
                <div class="form-group">
                    
                    <input type="password"
                    style={{backgroundColor:"#fffcc8",border:"none"}}
                    class="form-control shadow-sm" 
                    placeholder="Password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}/>
                    
                </div>
                <button 
                type="submit" 
                class="btn btn-primary bg-success"
                onClick={handleSubmit}>Create An Account</button>
            </form>
            </div>
           
            

        </div>
    )
}

export default Register
