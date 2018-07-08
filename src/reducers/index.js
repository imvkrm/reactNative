import { combineReducers } from 'redux'
import loginRed from '../component/login/loginReducer'


const rootReducer = combineReducers({
       loginRed:loginRed
})

export default rootReducer;
