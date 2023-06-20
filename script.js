'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt ('Сколько фильмов Вы уже осмотрели ?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt ('Сколько фильмов Вы уже осмотрели ?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};



function rememberMyFilms() {
    for (let i = 0; i < 2; i++){
        const a = prompt ('Один из последних просмотренных фильмов ?', ''),
              b = prompt ('На сколько Вы его оцените ?', '');
        
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('Done!');
        } else {
            console.log('Error!');
            i--; /* это означает что мы вернемся на одну итерацию назад и зададим еще раз те же вопросы */
        }
    }
}

// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        console.log('вы класический зритель');
    } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман');
    } else {
        console.log('произошла ошибка');
    }
}

// detectPersonalLevel();

function showMyDB () {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i-1] = prompt (`Ваш любимый жанр под номером ${i} ?`, '');
    }
}


writeYourGenres();

console.log(personalMovieDB);