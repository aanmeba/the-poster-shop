# E-Commerce Project - The Poster Shop

The Poster Shop is an e-commerce website that specializes in selling posters. The website provides a shopping experience, allowing users to browse, and add items to their cart or favourites list.

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

## Known Issues

- [ ] The length of of data for carasoul keeps changing when making it responsive
- [x] Favourite page doesn't show the correct items - something related to localStorage
- [x] Badge on the cart doesn't apply for the count of single item
- [ ] Updating the number of items in the Cart page doesn't apply to the real quanity
- [ ] Hovering effect on the collections on the Home page occasionally flicker
- [ ] After payment, the stock doesn't change in the Product page
- [ ] After payment, the cart items are restored in the Cart page

## Future Goals

- [x] Allowing multiple variants for a single item in the Cart. Currently, it overrides the existing selection.
- [x] Removing duplicated items in Cart page and adding up the quantities. Currently, it repeats the item with the same variant.
- [x] Adding a badge on the Cart icon when a user adds items to it.
- [ ] Upgrading the quantity input field on the Cart page.
- [ ] Handling cart items in the database to ensure the data persists when a user comes back later.
- [x] Fixing the issue of `FavButton` showing on the navigation bar when scrolling.
- [ ] Adding DOM and user events related testing cases

## Change Logs

### 01/08/2023 - Improve Handling of Variants in the Cart Page

- Showed variants in the Cart page
- Implemented calculations and features necessary for handling variant manipulation
- Improved handling duplicated items in the Cart page

### 06/08/2023 - Add badge for cart items

- Integrated a badge onto the cart icon, indicating the presence of items within
- Added a dark or light theme for the badge depending on the backgound colour in the navigation bar

### 12/08/2023 - Separate services and add tests for helpers

- Broke down services into smaller pieces
- Added tests for helper functions (work in progress)

### 05/09/2023 - Fix the `FavButton` showing on the nav while scrolling

- Removed unnecessary `z-index` in the `Card` component

### 13/09/2023 - Fix bugs in the Favourite Page & the Cart Badge

- Fix control flow to make adding favourite items to the Favourite Page
- Added a function to calculate the total number of items in the Cart Page, not the number of item's type
