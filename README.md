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

## Project Structure

```
├── amazon.html              # Main product listing page
├── images/                  # Image assets
│   ├── products/           # Product images
│   ├── ratings/            # Rating star images
│   └── icons/              # UI icons
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

### Key Features Implementation

1. **Product Grid**

   - Products are dynamically rendered using JavaScript
   - Each product card includes image, name, rating, price, and quantity selector
   - Responsive grid layout adapts to different screen sizes

2. **Price Formatting**

   - Prices are stored in cents and converted to dollars for display
   - Uses `toFixed(2)` to ensure proper decimal formatting

3. **Quantity Selection**

   - Dropdown menu allows selection of 1-10 items
   - Default selection is 1

4. **Add to Cart**
   - Visual feedback when items are added to cart
   - Cart quantity counter in header

## Getting Started

1. Clone the repository
2. Open `amazon.html` in a web browser
3. Browse products and interact with the interface

## Dependencies

- Google Fonts (Roboto)
- No external JavaScript libraries required

## Browser Support

The project uses modern web standards and should work in all modern browsers that support:

- ES6 JavaScript
- CSS Grid
- Flexbox

## Future Improvements

Potential areas for enhancement:

- Implement actual cart functionality
- Add product search functionality
- Create product detail pages
- Add user authentication
- Implement a backend for data persistence
