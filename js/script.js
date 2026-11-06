
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

// loads storage date from data.js
favouriteIds = JSON.parse(localStorage.getItem("favouriteIds")) || [];
savedCounts = JSON.parse(localStorage.getItem("favouriteCounts")) || {};

const originalRecipesCount = recipes.length;
const storedRecipes = JSON.parse(localStorage.getItem("addedRecipes")) || [];
recipes.push(...storedRecipes);

recipes.forEach(recipe => {
    if (savedCounts[recipe.id] !== undefined) {
        recipe.favouriteCount = savedCounts[recipe.id];
    }
});

// Add favourite recipe
document.addEventListener("click", function (event) {
    const button = event.target.closest(".favourite-button");
    if (!button) return;

    const recipeId = Number(button.dataset.id);
    const recipe = recipes.find(recipe => recipe.id === recipeId);

    if (!recipe) return;

    if (favouriteIds.includes(recipeId)) {
        favouriteIds = favouriteIds.filter(id => id !== recipeId);
    } else {
        favouriteIds.push(recipeId);

        recipe.favouriteCount++;
        savedCounts[recipe.id] = recipe.favouriteCount;
        localStorage.setItem("favouriteCounts", JSON.stringify(savedCounts));
    }

    localStorage.setItem("favouriteIds", JSON.stringify(favouriteIds));

    displayFeaturedRecipes();
    displayAllRecipes();
    displayFavourites();
});

// Create recipe card
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

// select recipe categories/filter
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

// Display all recipes
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

// Search bar
const searchInput = document.querySelector("#recipe-search-input");

if (searchInput) {
    searchInput.addEventListener("input", displayAllRecipes);
}

// Display favourite recipes list
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

// Submit recipe
const recipeForm = document.querySelector("#recipe-form");
const formMessage = document.querySelector("#form-message");

if (recipeForm && formMessage) {
    recipeForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const requiredFields = recipeForm.querySelectorAll("[required]");
        let isValid = true;

        requiredFields.forEach(field => {
            if (field.value.trim() === "" || !field.checkValidity()) {
                field.classList.add("input-error");
                isValid = false;
            } else {
                field.classList.remove("input-error");
            }
        });

        if (!isValid) {
            formMessage.textContent = "Please complete all required fields correctly.";
            formMessage.className = "form-message error";
            return;
        }

        const title = document.querySelector("#recipe-name").value.trim();
        const description = document.querySelector("#recipe-description").value.trim();
        const cookingTime = Number(document.querySelector("#recipe-cooking-time").value);
        const servesQty = Number(document.querySelector("#recipe-servings").value);
        const category = document.querySelector("#recipe-category").value;
        const photoInput = document.querySelector("#recipe-photo");
        const photoFile = photoInput.files[0];

        const ingredients = document.querySelector("#recipe-ingredients").value
            .split("\n")
            .map(item => item.trim())
            .filter(item => item !== "");

        const instructions = document.querySelector("#recipe-instructions").value
            .split("\n")
            .map(item => item.trim())
            .filter(item => item !== "");

        const newRecipe = {
            id: Math.max(...recipes.map(recipe => recipe.id)) + 1,
            title: title,
            category: category.charAt(0).toUpperCase() + category.slice(1),
            description: description,
            cookingTime: cookingTime,
            servesQty: servesQty,
            image: "",
            imageAlt: title,
            favouriteCount: 0,
            ingredients: ingredients,
            instructions: instructions
        };

         function saveRecipe(image) {
            newRecipe.image = image;

            // Get submitted recipes, including the new one
            const addedRecipes = [
                ...recipes.slice(originalRecipesCount),
                newRecipe
            ];

            // Save the submitted recipes in the browser
            try {
                localStorage.setItem("addedRecipes", JSON.stringify(addedRecipes));
            } catch (error) {
                formMessage.textContent = "Could not save recipe. Try a smaller photo.";
                formMessage.className = "form-message error";
                return;
            }

            // Add to the existing recipes array
            recipes.push(newRecipe);

            // Update the recipe list
            displayAllRecipes();

            // Clear the form
            recipeForm.reset();

            // Show success message
            formMessage.textContent = "Your recipe has been added successfully!";
            formMessage.className = "form-message success";
        }

        // Check if the user uploaded a photo
        if (photoFile) {
            const reader = new FileReader();

            reader.onload = function () {
                saveRecipe(reader.result);
            };

            reader.readAsDataURL(photoFile);
        } else {
            saveRecipe("");
        }
    });

    recipeForm.addEventListener("input", function (event) {
        const field = event.target;

        if (field.matches("[required]")) {
            if (field.value.trim() === "" || !field.checkValidity()) {
                field.classList.add("input-error");
            } else {
                field.classList.remove("input-error");
            }
        }
    });
}