
// Mobile navigation elements
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-navigation");
const menuIcon = document.querySelector(".menu-toggle i");

if (menuButton && navigation && menuIcon) {
    menuButton.addEventListener("click", () => {
        const isOpen = navigation.classList.toggle("active");
        menuButton.setAttribute("aria-expanded", isOpen);
        menuIcon.classList.toggle("bi-list", !isOpen);
        menuIcon.classList.toggle("bi-x-lg", isOpen);
    });
}

document.addEventListener("click", function (event) {
    const button = event.target.closest(".favourite-button");
    if (!button) return;

    const recipeId = Number(button.dataset.id);

    if (favouriteIds.includes(recipeId)) {
        favouriteIds = favouriteIds.filter(id => id !== recipeId);
    } else {
        favouriteIds.push(recipeId);
    }

    localStorage.setItem("favouriteIds", JSON.stringify(favouriteIds));

    displayFeaturedRecipes();
    displayAllRecipes();
    displayFavourites();
});

function createRecipeCard(recipe) {
    const isFavourite = favouriteIds.includes(recipe.id);

    return `
        <article class="recipe-card">
            <a href="recipe.html?id=${recipe.id}" class="recipe-card-link">
                <img
                    src="${recipe.image}"
                    alt="${recipe.imageAlt}"
                    class="recipe-card-image">
            </a>

            <div class="recipe-card-body">
                <div class="recipe-card-top">
                    <span class="recipe-category">${recipe.category}</span>

                    <button
                        type="button"
                        class="favourite-button"
                        data-id="${recipe.id}"
                        aria-pressed="${isFavourite}"
                        aria-label="${isFavourite ? "Remove from" : "Add to"} favourites: ${recipe.title}">
                        <i class="bi ${isFavourite ? "bi-heart-fill" : "bi-heart"}"
                            aria-hidden="true"></i>
                    </button>
                </div>

                <a href="recipe.html?id=${recipe.id}" class="recipe-title-link">
                    <h3>${recipe.title}</h3>
                </a>

                <p class="recipe-description">${recipe.description}</p>
                <p class="recipe-time">
                    <i class="bi bi-clock" aria-hidden="true"></i>
                    ${recipe.cookingTime} mins
                </p>
            </div>
        </article>
    `;
}

// Top 3 Most Loved Recipes
function displayFeaturedRecipes() {
    const featuredList = document.querySelector("#featured-recipes-list");

    if (!featuredList) return;

    const featuredRecipes = [...recipes]
        .sort((a, b) => b.favouriteCount - a.favouriteCount)
        .slice(0, 3);

    featuredList.innerHTML = featuredRecipes.map(createRecipeCard).join("");
}

let selectedCategory = "all";

const filterButtons = document.querySelectorAll(".filter-button");

filterButtons.forEach(button => {
    button.addEventListener("click", function () {
        selectedCategory = button.dataset.category;

        filterButtons.forEach(filterButton => {
            filterButton.classList.remove("active");
            filterButton.setAttribute("aria-pressed", "false");
        });

        button.classList.add("active");
        button.setAttribute("aria-pressed", "true");

        displayAllRecipes();
    });
});

function displayAllRecipes() {
    const allRecipesList = document.querySelector("#all-recipes-list");
    const searchInput = document.querySelector("#recipe-search-input");

    if (!allRecipesList || !searchInput) return;

    const searchTerm = searchInput.value.toLowerCase().trim();
    const filteredRecipes = recipes.filter(recipe => {

        const matchesCategory =
            selectedCategory === "all" ||
            recipe.category.toLowerCase() === selectedCategory;

        const matchesSearch =
            searchTerm.length < 3 ||
            recipe.title.toLowerCase().includes(searchTerm);

        return matchesCategory && matchesSearch;
    });

    if (filteredRecipes.length === 0) {
        allRecipesList.innerHTML = `
            <p class="no-recipes">
                No recipes found. Try another search or category.
            </p>
        `;
        return;
    }

    allRecipesList.innerHTML = filteredRecipes.map(createRecipeCard).join("");
}

const searchInput = document.querySelector("#recipe-search-input");

if (searchInput) {
    searchInput.addEventListener("input", displayAllRecipes);
}

function displayFavourites() {
    const favouriteList = document.querySelector("#favourites-list");

    if (!favouriteList) return;

    const savedRecipes = recipes.filter(recipe =>
        favouriteIds.includes(recipe.id)
    );

    if (savedRecipes.length === 0) {
        favouriteList.innerHTML = `
            <h3>No favourites yet.</h3>
            <p>
                Tap the heart on a recipe card
                to save your favourites here.
            </p>
        `;
        return;
    }

    favouriteList.innerHTML = savedRecipes.map(recipe => `
        <div class="favourite-item">
            <a href="recipe.html?id=${recipe.id}" class="favourite-link">
                <img src="${recipe.image}" alt="" class="favourite-image">
                <span>${recipe.title}</span>
            </a>
        </div>
    `).join("");
}

displayFeaturedRecipes();
displayAllRecipes();
displayFavourites();