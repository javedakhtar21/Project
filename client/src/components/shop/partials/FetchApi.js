import axios from "axios";
const apiURL = process.env.REACT_APP_API_URL;
//cartListProduct() extracts products stored in cart(localstorage variable) into carts
// and store id of every product into productArray(array)
// then put a post request on the url and sends productArray(array) in request body
// cartListProduct() called in client\src\components\shop\order\Action.js
export const cartListProduct = async () => {
  let carts = JSON.parse(localStorage.getItem("cart"));
  console.log('cart', carts);
  let productArray = [];
  if (carts) {
    for (const cart of carts) {
      productArray.push(cart.id);
    }
  }
   console.log('product array: ',productArray);

  try {
    //the api is handled in server\controller\products.js
    let res = await axios.post(`${apiURL}/api/product/cart-product`, {
      productArray,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
