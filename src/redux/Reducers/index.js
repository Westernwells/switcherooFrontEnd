import { combineReducers } from "redux";
import userReducer from "./userReducer.js/userReducer"
import setMeeting from "./setmeeting/setmeeting"
import Financial_data from "./financialReducer/financialReducer"
import detailsReducer from "./detailsReducer/detailsReducer";
import getStartedReducer from "./financialReducer/getStartedReducer";
import calculateResultReducer from "./financialReducer/calculateResultReducer";
import changeKeyReducer from './financialReducer/changeKeyReducer'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

   
const Reducers = combineReducers({
userReducer,
detailsReducer,
setMeeting,
Financial_data,
    getStartedReducer,
    calculateResultReducer,
    changeKeyReducer
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist:["Financial_data"]
  }

export default  persistReducer(persistConfig, Reducers);
