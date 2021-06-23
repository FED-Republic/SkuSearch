const INITIAL_STATE = {
    productSku: '',
    product: {},
    isFetching: false,
    error: undefined
};

const searchReducer = function (state = INITIAL_STATE, action) {
    console.log(action);
    console.log(state);

    switch (action.type) {
        case 'FETCH_PRODUCT_REQUEST':
            return Object.assign( state, {
                productSku: action.productSku,
                isFetching: true,
                error:undefined
            });
        case 'FETCH_PRODUCT_SUCCESS':
            return Object.assign({}, state, {
                isFetching: false,
                product: action.product,
                error:undefined
            });
        case 'FETCH_PRODUCT_FAILURE':
            return Object.assign({}, state, {
                isFetching: false,
                product:[],
                error: action.error
            });
        default:
            return state;
    }
}

export default searchReducer;

