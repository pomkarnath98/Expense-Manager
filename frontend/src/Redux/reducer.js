import {REGISTER_REQUEST,REGISTER_SUCCESS,REGISTER_FAILURE} from './actionTypes'

const initState = {
    data : ""
}

export default  ( state = initState , action ) => {
    switch ( action.type ){
        case REGISTER_REQUEST :
            return {
                ...state
            }
        case REGISTER_SUCCESS:
            return {
                ...state,
                isAuth : true,
                data : [...state.data , action.payload]
            } 
        case REGISTER_FAILURE :
            return {
                ...state
            } 
        default :
            return state     
    }
}
