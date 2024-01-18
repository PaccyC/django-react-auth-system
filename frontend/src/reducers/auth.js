import {
LOGIN_SUCCESS,
LOGIN_FAIL,
LOAD_USER_SUCCESS,
LOAD_USER_FAIL
} from '../actions/types'


const initialState={
    access:localStorage.getItem("access"),
    refresh:localStorage.getItem("refresh"),
    isAuthenticated:null,
    user:null
}
