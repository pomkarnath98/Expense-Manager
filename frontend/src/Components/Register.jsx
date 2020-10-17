import React, {useState} from 'react'
import NavBar from "./NavBar"
import style from "./nav.module.css"
import { useDispatch, useSelector } from "react-redux"
import { fetchregisterDetails } from "../Redux/action"

function Register(props) {
    const [data,setData] = useState({name:"",email:"",password:""})
     const dispatch = useDispatch()
     const {errMsg,reg} = useSelector(store=>store)

    const handleChange = (e)=>{
        setData({
            ...data,[e.target.name]:e.target.value
        })
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(fetchregisterDetails(data))

    }
    const regSuccess = ()=>{
        props.history.push("/")
        
    }


    return (
        <div  className={style.background}>
            { reg && regSuccess()}
            <NavBar/>
            <div className="container text-center" style={{width:"34%"}}>
            <form  style={{backgroundColor:"white",padding:"0 10% 10% 10%",borderRadius:"1%"}}>
                <br/>
                <div className="form-group">
                {errMsg && errMsg}
                  <input 
                  type="text"
                  style={{backgroundColor:"#fffcc8",border:"none"}} 
                  className="form-control shadow-sm" 
                  aria-describedby="Name" 
                  placeholder="Name"
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                  required
                  />
                  
                    
                </div>
                <div className="form-group">
                  
                  <input type="email" 
                  style={{backgroundColor:"#fffcc8",border:"none"}} 
                  className="form-control shadow-sm"  
                  aria-describedby="emailHelp" 
                  placeholder="Email"
                  name="email"
                  value={data.email}
                  onChange={handleChange}
                  required/>
                    
                </div>
                <div className="form-group">
                    
                    <input type="password"
                    style={{backgroundColor:"#fffcc8",border:"none"}}
                    className="form-control shadow-sm" 
                    placeholder="Password"
                    name="password"
                    value={data.password}
                    onChange={handleChange}
                    required/>
                    
                </div>
                <button 
                type="submit" 
                className="btn btn-primary bg-success"
                onClick={handleSubmit}>Create An Account</button>
            </form>
            </div>
           
            

        </div>
    )
}

export default Register
