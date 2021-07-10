import { ActionTypes } from "../constants/action-types"

const initialState = {
    products: [],
    selectedProduct: [],
};
export const productReducer= (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return { ...state, products: payload };

        case ActionTypes.SELECTED_PRODUCTS:
            return { ...state, selectedProduct: payload };

        case ActionTypes.REMOVE_PRODUCTS:
            return state.products.filter(({id})=> id !== payload);
            
        default:
            return state
    }
}