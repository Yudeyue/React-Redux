import { FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE, FETCH_USERS_REQUEST } from "./userTypes";
import axios from 'axios';


export const fetchUserRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}

const fetchUserSucess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUserFailure = (error) => {
    return {
       type: FETCH_USERS_FAILURE,
       payload: error
 
    }
    
}

export const fetchUsers = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest())
        axios.get('http://jsonplaceholder.typicode.com/users')
             .then(response => {
                const users = response.data
                dispatch(fetchUserSucess(users))
             })
            .catch(error=> {
                dispatch(fetchUserFailure(error.message))
            })
    }
}
    

