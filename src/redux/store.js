import { combineReducers, createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import CartReducer from "../redux/reducer/CartReducer";
const root = combineReducers({
    
    CartReducer,

})

const store = createStore(root,devToolsEnhancer())
export default store;
