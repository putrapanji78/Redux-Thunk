import {useDispatch} from 'react-redux'
import {api} from '../../../constant/api'
import * as action from '../actions'
import Axios from 'axios'
export const getUser= ()=>{
    return async(dispatch)=>{
        const URL= `https://jsonplaceholder.typicode.com/users`;
        dispatch(action.FETCH_USER())
        const response = await Axios.get(URL)
        if(response){
            dispatch(action.FETCH_USER_SUCCESS(response.data))
        }else{
            dispatch(action.FETCH_USER_FAILURE())
        }
    }
}
export const getUserById=(id)=>{
    return async(dispatch)=>{
        const URL= `https://jsonplaceholder.typicode.com/users/${id}`;
        dispatch(action.FETCH_USER())
        const response = await Axios.get(URL)
        if(response){
            dispatch(action.FETCH_USER_SUCCESS(response.data))
        }else{
            dispatch(action.FETCH_USER_FAILURE())
        }
    }
}
