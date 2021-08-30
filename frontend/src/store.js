import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from 'redux-thunk'

import reducer from './js/reducers/reducer'

const middelware =[thunk]
const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(...middelware)
    )
)
export default store