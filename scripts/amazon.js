import { cart, addToCart } from "../data/cart.js";
import { products } from "../data/products.js";
import { formatCurrency } from "./utils/money.js";

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

          <div class="product-price">$${formatCurrency(priceCents)}</div>

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

// Update cart quantity
function updateCartQuantity() {
  // compute total quantity of items in the cart
  let cartQuantity = 0;
  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  // Use dom to update the cart quantity
  document.querySelector(".js-cart-quantity").innerHTML = cartQuantity;
}

document.querySelectorAll(".js-add-to-cart").forEach((button) => {
  // EventListener to add items to cart
  button.addEventListener("click", () => {
    // push to cart using the data-attribute name - purpose is to attach any data to an element

    // Get the product id from the data-attribute
    const productId = button.dataset.productId;

    // Add the product to the cart
    addToCart(productId);

    updateCartQuantity();
  });
});
