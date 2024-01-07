
const productsReducer = (state = [], action) => {

    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...state, action.payload];
        case 'UPDATE':
            return state.map((item) => { return (item._id === action.payload._id ? action.payload : item) });
        case 'DELETE':
            return state.filter((item) => item._id !== action.payload);
        default:
            return state;
    }



}


export default productsReducer;