# E-Commerce Project - The Poster Shop

The Poster Shop is a fully functional e-commerce website that specializes in selling posters. It offers a wide range of beautifully designed posters that cater to various interests and styles. The website provides a seamless shopping experience, allowing users to browse, search, and add items to their cart or favorites list. With its intuitive user interface and efficient data management, The Poster Shop ensures a smooth and delightful shopping journey for its customers.

### 👉 Visit the live website: [The Poster Shop](https://thepostershop.netlify.app/)

## Features

- **Custom UI Components**: The Poster Shop incorporates custom-designed UI components, including carousels, titles, buttons, and cards, crafted from scratch to ensure a unique and visually appealing shopping interface.
- **Dynamic Product Data**: The website leverages Firestore to create and retrieve product data. The product listings are generated using a combination of Unsplash API for fetching images and a random words API to create product names and descriptions.
- **Hero Section**: The website features a Hero section that immediately captures users' attention with captivating visuals and compelling messages.
- **Containers-Components Design Pattern**: The Poster Shop follows a containers-components design pattern to separate state management and presentation components. This architecture enhances code organisation and maintainability.
- **Not Found Page**: In case a user navigates to a non-existent page, The Poster Shop provides a user-friendly Not Found page to ensure a seamless browsing experience.
- **Favorites and Shopping Cart Storage**: Users can add items to their favorites list and shopping cart. The website stores this data in the user's local storage, ensuring that their selections are preserved even if they leave or refresh the page.

## Tech Stack

- **React.js** powers the entire user interface and application logic.
- **React Router Dom** handles website routing and navigation, enabling smooth transitions between different pages.
- **Firestore (Database)** serves as the database, managing the product data.
- **APIs (Unsplash & Random Words)** allows for dynamic and diverse product data generation.

## Future Goals

- Adding an indicator to the cart when a user adds items to their cart.
- Handling cart items in the database to ensure the data persists when a user comes back later.
- Allowing the addition of variants of a single item to the cart. Currently, it overrides the existing selection.
- Upgrading the quantity input field on the cart page.
