import * as types from '../types'
const initialState = {
    data: [],
    isLoading: true,
    error: {},
  };
export default User = (state= initialState, action)=>{
    switch(action.type){
        case types.FETCH_USER:
            return {
                ...state,
                isLoading: true,
                error : {}
            }
        case types.FETCH_USER_SUCCESS:
            return{
                ...state,
                isLoading: false,
                data: action.payload,
                error: {}
            }
        case types.FETCH_USER_FAILURE:
            return{
                ...state,
                isLoading: false,
                error: "error"
            }
        case types.CLEAR_USER:
            return initialState;
        default:
            return state;
    }
}