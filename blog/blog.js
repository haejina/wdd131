const articles = [
  {
    id: 1,
    title: "Septimus Heap Book One: Magyk",
    date: "July 5, 2022",
    description: "If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg",
    imgAlt: "Septimus Heap Book One: Magyk cover",
    ages: "10-14",
    genre: "Fantasy",
    stars: "&#9733;&#9733;&#9733;&#9733;&#9734;"
  },
  {
    id: 2,
    title: "Magnus Chase Book One: Sword of Summer",
    date: "December 12, 2021",
    description: "The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.",
    imgSrc: "https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300",
    imgAlt: "Magnus Chase Book One: Sword of Summer cover",
    ages: "12-16",
    genre: "Fantasy",
    stars: "&#9733;&#9733;&#9733;&#9733;&#9734;"
  },
  {
    id: 3,
    title: "Belgariad Book One: Pawn of Prophecy",
    date: "Feb 12, 2022",
    description: "A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
    imgSrc: "https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
    imgAlt: "Belgariad Book One: Pawn of Prophecy cover",
    ages: "12-16",
    genre: "Fantasy",
    stars: "&#9733;&#9733;&#9733;&#9733;&#9734;"
  }
];

const articlesContainer = document.getElementById('articles-container');

// Function to create an article element
function createArticle(article) {
  const articleElement = document.createElement('article');
  
  const articleMarkup = `
    <div class="article-details">
      <p>${article.date}</p>
      <p>${article.ages}</p>
      <p>${article.genre}</p>
      <p>${article.stars}</p>
    </div>
    <div class="article-content">
      <h2>${article.title}</h2>
      <figure>
        <img src="${article.imgSrc}" alt="${article.imgAlt}">
        <figcaption>${article.description} <a href="#">Read More...</a></figcaption>
      </figure>
    </div>
  `;

  articleElement.innerHTML = articleMarkup;

  return articleElement;
}

// Create articles for each object in the articles array
articles.forEach(article => {
  articlesContainer.appendChild(createArticle(article));
});
