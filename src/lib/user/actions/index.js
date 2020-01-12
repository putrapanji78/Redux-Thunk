import * as types from '../types'

export const FETCH_USER = () => {
    return {
        type: types.FETCH_USER,
        error: {}
    }
}
export const FETCH_USER_SUCCESS = (data) => {
    return {
        type: types.FETCH_USER_SUCCESS,
        payload: data,
        error : {}
    }
}
export const FETCH_USER_FAILURE = ()=> {
    return {
        type : types.FETCH_USER_FAILURE
    }
}
export const CLEAR_USER = () => {
    return{
        type: types.CLEAR_USER
    }
}