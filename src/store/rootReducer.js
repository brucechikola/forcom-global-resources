import { combineReducers } from 'redux'
import auth from './auth'
import layout from './layout'
import cvData from './cvdata'
import uiController from './uicontroller'
const rootReducer = (asyncReducers) => (state, action) => {
    const combinedReducer = combineReducers({
        layout,
        auth,
        cvData,
        uiController,
        ...asyncReducers,
    })
    return combinedReducer(state, action)
}

export default rootReducer
