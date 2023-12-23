import { configureStore} from '@reduxjs/toolkit';
import toggleReducer from './toggleSlice'
import cartReducer from './cartSlice';
import locationReducer from './locationSlice';

const appstore = configureStore({
    reducer:{
        locationData : locationReducer,
        toggleData : toggleReducer,
        cartData : cartReducer,
    },

})

export default appstore;