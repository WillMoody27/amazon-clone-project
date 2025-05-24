// export is used to make the cart variable available to other files
export const cart = [];

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
