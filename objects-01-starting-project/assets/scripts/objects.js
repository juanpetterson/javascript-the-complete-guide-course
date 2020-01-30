const addMovieButton = document.getElementById('add-movie-btn');
const searchButton = document.getElementById('search-btn');

const movies = [];

const renderMovies = filterText => {
  const movieList = document.getElementById('movie-list');

  if (movies.length === 0) {
    movieList.classList.remove('visible');
    return;
  } else {
    movieList.classList.add('visible');
  }

  movieList.innerHTML = '';

  const filteredMovies = !filterText
    ? movies
    : movies.filter(movie => movie.info.title.includes(filterText));

  filteredMovies.forEach(movie => {
    const movieEl = document.createElement('li');
    const { info } = movie;
    let { getFormattedTitle } = movie;
    const { _title, title, ...rest } = info;
    // getFormattedTitle = getFormattedTitle.bind(movie);

    let text = getFormattedTitle.call(movie) + ' - ';

    for (const key in rest) {
      text += `${key} ${movie.info[key]}`;
    }

    movieEl.textContent = text;

    movieList.append(movieEl);
  });
};

const addMovieHandler = () => {
  const title = document.getElementById('title').value;
  const extraName = document.getElementById('extra-name').value;
  const extraValue = document.getElementById('extra-value').value;

  if (extraName.trim() === '' || extraValue.trim() === '') {
    return;
  }

  const newMovie = {
    info: {
      set title(val) {
        if (val.trim() === '') {
          this._title = 'DEFAULT';
          return;
        }
        this._title = val;
      },
      get title() {
        return this._title;
      },
      [extraName]: extraValue
    },
    id: Math.random(),
    getFormattedTitle() {
      return this.info.title.toUpperCase();
    }
  };

  newMovie.info.title = title;

  movies.push(newMovie);
  renderMovies();
};

const searchMoviesHandler = () => {
  const filterText = document.getElementById('filter-title').value;
  renderMovies(filterText);
};

addMovieButton.addEventListener('click', addMovieHandler);
searchButton.addEventListener('click', searchMoviesHandler);
