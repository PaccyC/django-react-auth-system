import {thunk} from 'redux-thunk'
import {applyMiddleware,compose} from 'redux'
import {  composeWithDevTools} from 'redux-devtools-extension'
import { configureStore } from '@reduxjs/toolkit'
 import rootReducer from './reducers/rootReducer'

const initialState={}
const middleware=[thunk]

const store=configureStore({
    reducer:rootReducer,
    preloadedState:initialState,
    middleware:(getDefaultMiddleware)=>{
        getDefaultMiddleware().concat(...middleware)
        
    },enhancers:[composeWithDevTools()]
})

export default store