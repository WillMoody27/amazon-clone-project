# Amazon Clone Report

A simplified Amazon-like e-commerce website built with HTML, CSS, and JavaScript. This project demonstrates the implementation of a product listing page with features similar to Amazon's interface.

## Features

- Responsive product grid layout
- Product cards with:
  - Product images
  - Product names
  - Star ratings with review counts
  - Price display
  - Quantity selector
  - Add to Cart functionality
- Amazon-style header with:
  - Logo
  - Search bar
  - Returns & Orders link
  - Shopping cart with item count
- Shopping cart functionality:
  - Add items to cart
  - Increment quantity for existing items
  - Cart state persistence
  - Cart quantity display
- Checkout functionality:
  - Dynamic cart summary
  - Delivery date options
  - Shipping cost calculations
  - Product quantity management
  - Order total calculation

## Project Structure

```
├── amazon.html              # Main product listing page
├── checkout.html           # Checkout page
├── images/                  # Image assets
│   ├── products/           # Product images
│   ├── ratings/            # Rating star images
│   └── icons/              # UI icons
├── data/
│   ├── products.js         # Product data and exports
│   └── cart.js            # Cart data and functionality exports
├── scripts/
│   ├── amazon.js           # Main JavaScript file (ES6 module)
│   └── checkout.js         # Checkout page JavaScript (ES6 module)
└── styles/
    ├── shared/             # Shared styles
    │   ├── general.css     # Global styles
    │   └── amazon-header.css # Header styles
    └── pages/
        ├── amazon.css      # Product page styles
        └── checkout.css    # Checkout page styles
```

## Technical Details

### Data Normalization

The project implements data normalization to ensure consistent and efficient data management:

![Data Normalization Diagram](assets/normalized-data-img.png)

Key aspects of data normalization:

- Products and cart data are stored in separate modules
- Cart items reference products by ID to maintain data integrity
- Prevents data duplication and ensures consistency
- Enables efficient updates and modifications
- Supports modular development and maintenance

### Module System

The project uses ES6 modules for better code organization and dependency management:

- Main script (`amazon.js`) is loaded as a module using `type="module"`
- Checkout script (`checkout.js`) is loaded as a module using `type="module"`
- Cart functionality is imported from `cart.js`
- Product data is imported from `products.js`
- Prevents naming conflicts between different files
- Enables better code organization and maintainability

### Product Data Structure

Products are stored in JavaScript objects with the following properties:

```javascript
{
  id: "unique-product-id",  // Unique identifier for the product
  image: "path/to/image.jpg",
  name: "Product Name",
  ratingImg: "path/to/rating-image.png",
  rating: {
    stars: 4.5,
    count: 87
  },
  priceCents: 1090  // Price in cents (e.g., 1090 = $10.90)
}
```

### Cart Data Structure

Cart items are stored with the following structure:

```javascript
{
  productId: "unique-product-id",  // References the product's id
  quantity: 1  // Number of items in cart
}
```

The cart is managed through a module system:

```javascript
// Import cart from cart.js
import { cart as myCart } from "../data/cart.js";
```

### Key Features Implementation

1. **Product Grid**

   - Products are dynamically rendered using JavaScript
   - Each product card includes image, name, rating, price, and quantity selector
   - Responsive grid layout adapts to different screen sizes
   - Products are uniquely identified using product IDs

2. **Price Formatting**

   - Prices are stored in cents and converted to dollars for display
   - Uses `toFixed(2)` to ensure proper decimal formatting

3. **Quantity Selection**

   - Dropdown menu allows selection of 1-10 items
   - Default selection is 1

4. **Add to Cart**

   - Visual feedback when items are added to cart
   - Cart quantity counter in header
   - Cart state management:
     - Checks for existing items before adding
     - Increments quantity for existing items
     - Adds new items with quantity 1
   - Cart data persistence using cart.js
   - Real-time cart quantity updates

5. **Checkout System**
   - Dynamic cart summary generation
   - Delivery date options with different shipping costs
   - Product quantity management in checkout
   - Order total calculation
   - Responsive checkout layout
   - Integration with cart module for data consistency

## Technical Implementation Details

### Cart Quantity Updates

The cart quantity is updated in real-time using the following process:

1. When an item is added to cart:
   - System checks if item exists in cart
   - Increments quantity if item exists
   - Adds new item if it doesn't exist
2. Cart total is calculated by:
   - Iterating through all cart items
   - Summing up quantities
3. DOM is updated:
   - Cart quantity element is selected using `.js-cart-quantity` class
   - New total is displayed in the header
   - Updates happen immediately after each cart modification

### Checkout Implementation

The checkout system includes:

1. Cart Summary Generation:

   - Dynamically pulls cart data from cart.js
   - Displays product images, names, and quantities
   - Shows individual item prices and totals

2. Delivery Options:

   - Multiple delivery date choices
   - Different shipping cost tiers
   - Radio button selection for delivery options

3. Order Management:
   - Quantity updates in checkout
   - Delete item functionality
   - Real-time price updates

## Getting Started

1. Clone the repository
2. Open `amazon.html` in a web browser
3. Browse products and interact with the interface
4. Add items to cart and proceed to checkout
5. Test the checkout functionality with different delivery options

## Dependencies

- Google Fonts (Roboto)
- ES6 Modules support in browser
- No external JavaScript libraries required

## Browser Support

The project uses modern web standards and should work in all modern browsers that support:

- ES6 JavaScript
- ES6 Modules
- CSS Grid
- Flexbox
- Local Storage (for cart persistence)

## Future Improvements

Potential areas for enhancement:

- Add product search functionality
- Create product detail pages
- Add user authentication
- Implement a backend for data persistence
- Add order history tracking
- Implement payment processing
- Add address management system
- Implement order confirmation emails
