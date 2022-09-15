const moviesButton = document.getElementById('movies');
const drawNumberOfFilms = document.getElementById('numberOFfilms');

let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms || 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}

for(let i = 0; i < 2; i++){

    let q1 =  prompt('Один из последних просмотренных фильмов?');
    let q2 =  prompt('Рейтинг');
    
    personalMovieDB.movies[q1] = Number(q2);
    
}

moviesButton.addEventListener('keyup', ()=> {
    numberOfFilms = moviesButton.value;
    drawNumberOfFilms.innerHTML = numberOfFilms || 0;
})

