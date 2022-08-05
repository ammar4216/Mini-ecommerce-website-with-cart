const initState={
  products :[],
  totalPrice :0,
  totalQuantities:0,
}
const CartReducer = (state= initState,action) => {
  let findPro;
  let index;  
  switch (action.type) {
      case 'ADD_TO_CART':
       const{product,quantity} = action.payload;
       const check = state.products.find(prd => prd.id === product.id);
        if (check) {
            return state;
        }else{
           const tPrice = state.totalPrice + product.discoutPrice * quantity;
           const tQuantities = state.totalQuantities + quantity;
           product.quantity = quantity;
           return{
              ...state, products:[...state.products,product],totalPrice : tPrice , totalQuantities:tQuantities}
          }
          case "INC":
    findPro = state.products.find((pd) => pd.id === action.payload);
    index = state.products.findIndex((pd) => pd.id === action.payload);
    findPro.quantity += 1;
    state.products[index] = findPro;
    return {
      ...state,
      totalPrice: state.totalPrice + findPro.discoutPrice,
      totalQuantities: state.totalQuantities + 1,
    };
    case 'DEC':
      findPro = state.products.find((pd) => pd.id === action.payload);
      index = state.products.findIndex((pd) => pd.id === action.payload);
      if(findPro.quantity>1){
        findPro.quantity -= 1;
    state.products[index] = findPro;
    return {
      ...state,
      totalPrice: state.totalPrice - findPro.discoutPrice,
      totalQuantities: state.totalQuantities - 1,
    };
      }
      else{
        return state
      }
case 'REMOVE':

const confirmSms = window.confirm("Do you want to delete this product ? ")
if (confirmSms) {
  findPro = state.products.find((pd) => pd.id === action.payload);
  const filtered =state.products.filter(pd=>pd.id !== action.payload)

return{
  ...state, products: filtered, 
  totalPrice: state.totalPrice - findPro.discoutPrice* findPro.quantity, totalQuantities: state.totalQuantities - findPro.quantity
}
} else{
  return state;
}
      default: return state;
  }

}
export default CartReducer;