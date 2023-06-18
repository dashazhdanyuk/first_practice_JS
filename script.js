const numberOfFilms = +prompt ('Сколько фильмов Вы уже осмотрели ?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


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

if (personalMovieDB.count < 10) {
    console.log('просмотрено довольно мало фильмов');
} else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    console.log('вы класический зритель');
} else if (personalMovieDB.count > 30) {
    console.log('Вы киноман');
} else {
    console.log('произошла ошибка');
}

console.log(personalMovieDB);