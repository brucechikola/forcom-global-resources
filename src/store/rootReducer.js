import { combineReducers } from 'redux'
import auth from './auth'
import layout from './layout'
import uiController from './uicontroller'
import career from './career/careerSlice'
const rootReducer = (asyncReducers) => (state, action) => {
    const combinedReducer = combineReducers({
        layout,
        auth,
        uiController,
        career,
        ...asyncReducers,

    })
    return combinedReducer(state, action)
}

export default rootReducer
