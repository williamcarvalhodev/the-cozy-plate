
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

// Top 3 Most Loved Recipes
function displayFeaturedRecipes() {
    const featuredList = document.querySelector("#featured-recipes-list");

    if (!featuredList) return;

    const featuredRecipes = [...recipes]
        .sort((a, b) => b.favouriteCount - a.favouriteCount)
        .slice(0, 3);
    featuredList.innerHTML = featuredRecipes.map(recipe => `
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
    `).join("");
}

displayFeaturedRecipes();