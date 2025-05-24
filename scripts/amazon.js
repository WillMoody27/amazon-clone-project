let productsHTML = "";

products.forEach(({ id, image, name, ratingImg, rating, priceCents }) => {
  const { count } = rating;

  // Add the HTML to the productsHTML variable - using the accumulator pattern
  productsHTML += `
        <div class="product-container">
          <div class="product-image-container">
            <img
              class="product-image"
              src=${image}
            />
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${name}
          </div>

          <div class="product-rating-container">
            <img
              class="product-rating-stars"
              src=${ratingImg}
            />
            <div class="product-rating-count link-primary">${count}</div>
          </div>

          <div class="product-price">$${(priceCents / 100).toFixed(2)}</div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png" />
            Added
          </div>

          <button class="add-to-cart-button button-primary js-add-to-cart" data-product-id="${id}">Add to Cart</button>
        </div>
  `;
});

// Add products to the DOM
// console.log(productsHTML);
document.querySelector(".js-products-grid").innerHTML = productsHTML;

document.querySelectorAll(".js-add-to-cart").forEach((button) => {
  // EventListener to add items to cart
  button.addEventListener("click", () => {
    // push to cart using the data-attribute name - purpose is to attach any data to an element
    const productId = button.dataset.productId;
    /*
    Add product to the cart
    If it is, increment the quantity
    If it is not, add the product to the cart
    Next include a unique id to the product in the cart
    */

    let matchingItem;

    // Check if the product is already in the cart
    cart.forEach((item) => {
      if (productId === item.productId) {
        matchingItem = item;
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

    // compute total quantity of items in the cart
    let cartQuantity = 0;
    cart.forEach((item) => {
      cartQuantity += item.quantity;
    });

    // Use dom to update the cart quantity
    document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;
  });
});
