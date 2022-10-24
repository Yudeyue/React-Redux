import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes"



const initialState = {
    loading: false,
    users: [],
    error: ''
}

const  userReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case FETCH_USERS_REQUEST:
    return { ...state, 
          loading: true }

  case FETCH_USERS_SUCCESS:
        return { 
          loading: false, 
          users: payload, 
          error: '' }

  case FETCH_USERS_FAILURE:
    return { 
             loading: false, 
             user: [], 
             error: payload }

  default:
    return state
  }
}

export default userReducer