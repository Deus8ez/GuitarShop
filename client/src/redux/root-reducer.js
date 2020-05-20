import { combineReducers } from 'redux';
import userReducer from './user/user.reducer'
import cartReducer from './cart-store/reducer'
import SignInPageReducer from './sign-in-page/reducer'
import guitarReducer from './to-be-sold/reducer'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import guitarList from './dbGuitars/reducer'
import { reducer as reduxForm } from 'redux-form'
// import guitarCostReducer from './priceCounter/reducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['guitarsToBeSold', 'user'],
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    signinpage: SignInPageReducer,
    form: reduxForm,
    guitarsToBeSold: guitarReducer,
    dbGuitarList: guitarList
});


export default persistReducer(persistConfig, rootReducer);