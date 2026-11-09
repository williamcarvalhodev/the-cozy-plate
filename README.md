# The Cozy Plate

The Cozy Plate is a responsive recipe website created as part of the **Module 3 JavaScript Assignment**. It helps users discover easy recipes, save their favourites and suggest their own recipes.

## Features

- **Home page:** Displays the three most-saved recipes.
- **Browse recipes:** Search recipes by name and filter them by category.
- **Favourites:** Save or remove recipes using the heart button.
- **Suggest a Recipe:** Submit a recipe with ingredients, instructions and an optional photo. The form includes validation.
- **Recipe details:** View ingredients, cooking steps, cooking time and servings on a dynamic recipe page.
- **Responsive design:** Works on desktop and mobile screens.

## Technologies

- HTML5
- CSS3
- Vanilla JavaScript
- Bootstrap Icons
- Browser `localStorage`

## Project Pages

- `index.html` — Home page
- `recipes.html` — Recipe list, search, filters, favourites and submission form
- `recipe.html` — Dynamic recipe detail page

## How to Run

1. Download or clone the repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html` using Live Server or a browser.

No installation or build step is required.

## Data Storage

The original recipes are stored in `js/data.js`. JavaScript functionality is in `js/script.js`.

Favourites, favourite counts and submitted recipes are saved in browser `localStorage`, so they remain available after refreshing or navigating between pages. This data is local to each browser and is not shared between visitors. Uploaded photos are subject to browser storage limits.

## Author
William Carvalho