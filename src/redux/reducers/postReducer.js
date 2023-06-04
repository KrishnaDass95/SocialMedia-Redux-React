import { FETCH_POST_FROM_API, FETCH_POST_SUCCESS, FETCH_POST_FAILURE } from "../actions/actionType";


let initialState = {
    loading: true,
    data: [],
    error: ''
}

export const postReducer = (state=initialState, action) => {
    switch(action.type){
        case FETCH_POST_FROM_API:
            return {
                ...state, loading: true
            }
        case FETCH_POST_SUCCESS:
            return {
                ...state, loading: false, data: action.payload
            }
        case FETCH_POST_FAILURE:
            return {
                ...state, loading: false, error: action.payload
            }
        default:
            return state;
    }
}