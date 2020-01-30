const addMovieButton = document.getElementById('add-movie-btn');
const backdrop = document.getElementById('backdrop');

const addMovieModal = document.getElementById('add-modal');
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const acceptAddMovieButton = cancelAddMovieButton.nextElementSibling;

const deleteMovieModal = document.getElementById('delete-modal');

const addMovieInputTitle = document.getElementById('title');
const addMovieInputImageUrl = document.getElementById('image-url');
const addMovieInputRating = document.getElementById('rating');

const entryTextSection = document.getElementById('entry-text');

const movies = [];

const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = 'block';
  } else {
    entryTextSection.style.display = 'none';
  }
};

const closeMovieDeletionModal = () => {
  deleteMovieModal.classList.remove('visible');
};

const deleteMovieHandler = movieId => {
  let movieIndex = 0;

  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }

    movieIndex++;
  }

  movies.splice(movieIndex, 1);

  const listRoot = document.getElementById('movie-list');
  listRoot.children[movieIndex].remove();
  // listRoot.removeChild(listRoot.children[movieIndex]);
  closeMovieDeletionModal();
  toggleBackdrop();
  updateUI();
};

const cancelDeletionMovieHandler = () => {
  closeMovieDeletionModal();
  toggleBackdrop();
};

const startDeleteMovieHandler = movieId => {
  deleteMovieModal.classList.add('visible');
  toggleBackdrop();
  const cancelDeletionButton = deleteMovieModal.querySelector('.btn--passive');
  let confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');

  confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));
  confirmDeletionButton = deleteMovieModal.querySelector('.btn--danger');

  cancelDeletionButton.removeEventListener('click', cancelDeletionMovieHandler);
  cancelDeletionButton.addEventListener('click', cancelDeletionMovieHandler);

  confirmDeletionButton.addEventListener(
    'click',
    deleteMovieHandler.bind(null, movieId)
  );
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
  const newMovieElement = document.createElement('li');
  newMovieElement.className = 'movie-element';
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
      <img src="${imageUrl}" alt="${title}"/>
    </div>
    <div class="movie-element__info">
      <h2>${title}</h2>
      <p>${rating}/5 stars</p>
    </div>
  `;

  const listRoot = document.getElementById('movie-list');
  listRoot.appendChild(newMovieElement);

  newMovieElement.addEventListener(
    'click',
    startDeleteMovieHandler.bind(null, id)
  );
};

const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
};

const closeMovieModal = () => {
  addMovieModal.classList.remove('visible');
};

const showMovieModal = () => {
  addMovieModal.classList.add('visible');
  toggleBackdrop();
};

const clearMovieInputs = () => {
  addMovieInputTitle.value = '';
  addMovieInputImageUrl.value = '';
  addMovieInputRating.value = '';
};

const cancelAddMovieHandler = () => {
  closeMovieModal();
  clearMovieInputs();
  toggleBackdrop();
};

const acceptAddMovieHandler = () => {
  let title = addMovieInputTitle.value;
  let imageUrl = addMovieInputImageUrl.value;
  let rating = addMovieInputRating.value;

  if (
    !title.trim() === '' ||
    imageUrl.trim() === '' ||
    rating.trim() === '' ||
    +rating < 1 ||
    +rating > 5
  ) {
    alert('Preencha valores válidos (avaliação entre 1 e 5!');
    return;
  }

  const movie = {
    id: Math.random().toString(),
    title,
    imageUrl,
    rating
  };

  movies.push(movie);

  closeMovieModal();
  toggleBackdrop();
  clearMovieInputs();
  renderNewMovieElement(movie.id, movie.title, movie.imageUrl, movie.rating);
  updateUI();
};

const backdropClickHandler = () => {
  closeMovieModal();
  closeMovieDeletionModal();
  clearMovieInputs();
  toggleBackdrop();
};

addMovieButton.addEventListener('click', showMovieModal);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
acceptAddMovieButton.addEventListener('click', acceptAddMovieHandler);
backdrop.addEventListener('click', backdropClickHandler);
