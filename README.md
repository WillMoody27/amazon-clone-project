# Amazon Clone Project

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

## Project Structure

```
├── amazon.html              # Main product listing page
├── images/                  # Image assets
│   ├── products/           # Product images
│   ├── ratings/            # Rating star images
│   └── icons/              # UI icons
├── data/
│   ├── products.js         # Product data
│   └── cart.js            # Cart data and functionality
├── scripts/
│   └── amazon.js           # Main JavaScript file
└── styles/
    ├── shared/             # Shared styles
    │   ├── general.css     # Global styles
    │   └── amazon-header.css # Header styles
    └── pages/
        └── amazon.css      # Product page styles
```

## Technical Details

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

## Getting Started

1. Clone the repository
2. Open `amazon.html` in a web browser
3. Browse products and interact with the interface
4. Add items to cart and observe the cart functionality

## Dependencies

- Google Fonts (Roboto)
- No external JavaScript libraries required

## Browser Support

The project uses modern web standards and should work in all modern browsers that support:

- ES6 JavaScript
- CSS Grid
- Flexbox
- Local Storage (for cart persistence)

## Future Improvements

Potential areas for enhancement:

- Implement checkout process
- Add product search functionality
- Create product detail pages
- Add user authentication
- Implement a backend for data persistence
- Add cart item removal functionality
- Implement cart total calculation
- Add order history tracking
