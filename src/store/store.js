import { combineReducers,createStore} from "redux";
import counterReducer from "../reducers/counterReducers";
import todoReducers from "../reducers/todoReducers";
const reducer = combineReducers({c:counterReducer,t:todoReducers})

const store = new createStore(reducer);
export default store;