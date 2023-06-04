import { FETCH_POST_FROM_API, FETCH_POST_SUCCESS, FETCH_POST_FAILURE } from "./actionType";



// Action creator file
export const fetchPostFromApi = () => {
    return{
        type : FETCH_POST_FROM_API
    }
}

export const fetchPostSuccess= (data) => {
    return{
        type: FETCH_POST_SUCCESS,
        payload: data
    }
}

export const fetchPostFailure = (error) => {
    return {
        type: FETCH_POST_FAILURE,
        error: error
    }
}

// Lets make the API call
export const fetchPosts = () => {
    return async (dispatch) => {
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            console.log(data);
            dispatch(fetchPostSuccess(data))
        }
        catch(error){
            dispatch(fetchPostFailure(error))

        }
    }
}