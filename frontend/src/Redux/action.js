import {REGISTER_REQUEST,REGISTER_SUCCESS,REGISTER_FAILURE} from './actionTypes'
import axios from 'axios'


export const registerRequest = () => {
    return  {
        type : REGISTER_REQUEST
    }
}

export const registerSuccess = (payload) => {
    return  {
        type :REGISTER_SUCCESS,
        payload
    }
}

export const registerFailure = () => {
    return  {
        type :REGISTER_FAILURE
    }
}




export const fetchregisterDetails = ( payload ) => ( dispatch ) => {
    console.log(payload)
    dispatch( registerRequest())
    axios
    .post( 'https://mod-living-db.herokuapp.com/user',{
        name : payload.name,
        email : payload.email,
        password : payload.password,
        
    })
    .then( res => {
        dispatch( registerSuccess(res.data) );
        console.log(res)
        
    })
    .catch( err => {
        dispatch( registerFailure() );
        console.log(err)
    })
}

export const fetchDetails = () =>(dispatch)=>{
    console.log("WORKING")
    dispatch(registerRequest())
}

export const post_login_request = (payload) => ({
    type: POST_LOGIN_REQUEST,
    payload,
  });
  export const post_login_failure = (payload) => ({
    type: POST_LOGIN_FAILURE,
    payload,
  });
  export const post_login_success = (payload) => ({
    type: POST_LOGIN_SUCCESS,
    payload,
  });
  
  export const LoginRequest = (payload) => (dispatch) => {
    dispatch(post_login_request(payload));
    return axios
      .post("http://localhost:8080/auth/login", payload)
      .then((res) => res.data.token)
      .then((res) =>
        axios.get(`http://localhost:8080/user/${payload.username}`, {
          headers: {
            Authorization: `Bearer ${res}`,
          },
        })
      )
      .then((res) => dispatch(post_login_success(res.data)))
      .catch((err) => dispatch(post_login_failure(err)));
  };
  