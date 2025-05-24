// export is used to make the cart variable available to other files
export const cart = [
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
