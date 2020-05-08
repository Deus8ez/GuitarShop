import { combineReducers } from 'redux';
import userReducer from './user/user.reducer'
import cartReducer from './cart-store/reducer'
import SignInPageReducer from './sign-in-page/reducer'
import guitarReducer from './to-be-sold/reducer'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import acousticGuitarArray from './acousticGuitars/reducer'
// import guitarCostReducer from './priceCounter/reducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['guitarsToBeSold'],
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    signinpage: SignInPageReducer,
    guitarsToBeSold: guitarReducer,
    acousticGuitarList: acousticGuitarArray
});


export default persistReducer(persistConfig, rootReducer);