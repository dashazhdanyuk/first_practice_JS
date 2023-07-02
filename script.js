'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: () => {
        personalMovieDB.count = +prompt ('Сколько фильмов Вы уже осмотрели ?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt ('Сколько фильмов Вы уже осмотрели ?', '');
        }
    },
    rememberMyFilms: () => {
        for (let i = 0; i < 2; i++){
            const a = prompt ('Один из последних просмотренных фильмов ?', '').trim(),
                  b = prompt ('На сколько Вы его оцените ?', '');
            
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('Done!');
            } else {
                console.log('Error!');
                i--; /* это означает что мы вернемся на одну итерацию назад и зададим еще раз те же вопросы */
            }
        }
    },
    detectPersonalLevel: () => {
        if (personalMovieDB.count < 10) {
            console.log('просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
            console.log('вы класический зритель');
        } else if (personalMovieDB.count > 30) {
            console.log('Вы киноман');
        } else {
            console.log('произошла ошибка');
        }
    },
    showMyDB: () => {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: () => {
        if (personalMovieDB.privat) {
            personalMovieDB.privat === false;
        } else {
            personalMovieDB.privat === true;
        }
    },
    writeYourGenres: () => {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt (`Ваш любимый жанр под номером ${i} ?`, '');

            if (genre == null || genre == ''){
                console.log("Вы ввели некорректные данные или не ввели их вообще")
                i--;
            } else {
                personalMovieDB.genres[i-1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item,i) => {
            console.log(`Любимый жанр ${i+1} - это ${item}`) /* item - перебор всех ключей массива */
        }) 
    }
    
};
