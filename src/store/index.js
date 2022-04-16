import { createStore } from 'redux'
import lolReducer from './reducer'

const store = createStore(
    lolReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
