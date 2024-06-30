import recipes from './recipes.mjs';

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function getRandomListEntry(arr) {
  const index = getRandomNumber(arr.length);
  return arr[index];
}

function tagsTemplate(tags) {
  return tags.map(tag => `<li>${tag}</li>`).join('');
}

function ratingTemplate(rating) {
  let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
    } else {
      html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
    }
  }
  html += `</span>`;
  return html;
}

function recipeTemplate(recipe) {
  return `
    <figure class="recipe">
      <img src="images/${recipe.image}" alt="image of ${recipe.name}" />
      <figcaption>
        <ul class="recipe__tags">
          ${tagsTemplate(recipe.tags)}
        </ul>
        <h2><a href="#">${recipe.name}</a></h2>
        <p class="recipe__ratings">
          ${ratingTemplate(recipe.rating)}
        </p>
        <p class="recipe__description">
          ${recipe.description}
        </p>
      </figcaption>
    </figure>
  `;
}

function renderRecipes(recipeList) {
  const container = document.getElementById('recipe-container');
  const recipesHTML = recipeList.map(recipe => recipeTemplate(recipe)).join('');
  container.innerHTML = recipesHTML;
}

function init() {
  const recipe = getRandomListEntry(recipes);
  renderRecipes([recipe]);
}

function filterRecipes(query) {
  query = query.toLowerCase();
  const filteredRecipes = recipes.filter(recipe => {
    return (
      recipe.name.toLowerCase().includes(query) ||
      recipe.description.toLowerCase().includes(query) ||
      recipe.tags.find(tag => tag.toLowerCase().includes(query)) ||
      recipe.ingredients.find(ingredient => ingredient.toLowerCase().includes(query))
    );
  });
  
  // Sort the list of recipes by name alphabetically
  filteredRecipes.sort((a, b) => a.name.localeCompare(b.name));
  
  return filteredRecipes;
}

function searchHandler(event) {
  event.preventDefault();
  const query = document.querySelector('form input[type="text"]').value;
  const filteredRecipes = filterRecipes(query);
  renderRecipes(filteredRecipes);
}

document.querySelector('form').addEventListener('submit', searchHandler);

// Initialize with a random recipe
init();
