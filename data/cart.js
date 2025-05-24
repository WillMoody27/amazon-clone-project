// export is used to make the cart variable available to other files
export let cart = [
  // The productID will be used to identify the product in the products.js file - this technique is called a normalizing the data and is a common practice in database design
  {
    productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity: 2,
    name: "Product 1",
    priceCents: 1000,
  },
  {
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 1,
    name: "Product 2",
    priceCents: 1200,
  },
];

// Add to cart function
export function addToCart(productId) {
  let matchingItem;

  // Validate products in the cart
  cart.forEach((cartItem) => {
    if (productId === cartItem.productId) {
      matchingItem = cartItem;
    }
  });

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      quantity: 1,
    });
  }
}

// Delete from cart function
/*
Steps: 
1. create new cart array
2. iterate over the cart array
3. if the productId is not the same as the productId to remove, add the item to the new cart array
4. update the cart array to be the new cart array
*/
export function removeFromCart(productId) {
  const newCart = [];
  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {
      newCart.push(cartItem);
    }
  });

  cart = newCart;
}
