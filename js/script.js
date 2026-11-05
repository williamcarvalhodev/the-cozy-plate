
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

function createRecipeCard(recipe) {
    return `
        <article class="recipe-card">
            <a href="recipe.html?id=${recipe.id}" class="recipe-card-link">
                <img
                    src="${recipe.image}"
                    alt="${recipe.imageAlt}"
                    class="recipe-card-image">
                <div class="recipe-card-body">
                    <span class="recipe-category">${recipe.category}</span>
                    <h3>${recipe.title}</h3>
                    <p class="recipe-description">${recipe.description}</p>
                    <p class="recipe-time">
                        <i class="bi bi-clock" aria-hidden="true"></i>
                        ${recipe.cookingTime} mins
                    </p>
                </div>
            </a>
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

function displayAllRecipes() {
    const allRecipesList = document.querySelector("#all-recipes-list");
    const searchInput = document.querySelector("#recipe-search-input");
    

    if (!allRecipesList || !searchInput) return;

    const searchTerm = searchInput.value.toLowerCase().trim();

     if (searchTerm.length < 3) {
        allRecipesList.innerHTML = recipes.map(createRecipeCard).join("");
        return;
    }

    const filteredRecipes = recipes.filter(recipe =>
        recipe.title.toLowerCase().includes(searchTerm)
    );

    if (filteredRecipes.length === 0) {
        allRecipesList.innerHTML = `
            <p class="no-recipes">
                No recipes found. Try another name.
            </p>
        `;
        pagination.innerHTML = "";
        return;
    }

    allRecipesList.innerHTML = filteredRecipes.map(createRecipeCard).join("");
}

const searchInput = document.querySelector("#recipe-search-input");

if (searchInput) {
    searchInput.addEventListener("input", displayAllRecipes);
}

displayFeaturedRecipes();
displayAllRecipes();