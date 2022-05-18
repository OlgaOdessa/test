'use strict';
/*
// ДЗ 1

const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//   b = prompt('На сколько оцените его?', ''),
//   c = prompt('Один из последних просмотренных фильмов?', ''),
//   d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// ДЗ 2

for (let i = 0; i < 2; i++) {
  const a = prompt('Один из последних просмотренных фильмов?', ''),
        b = prompt('На сколько оцените его?', '');

  if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log('done');
  } else {
    console.log('error');
    i--;
  }
}
// второй способ цикла
do {
  const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', '');
  if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log('done');
  }
} while (Object.keys(personalMovieDB.movies)[1] == undefined);

console.log(personalMovieDB.movies);
console.log(Object.keys(personalMovieDB.movies));

personalMovieDB.count < 10
  ? console.log('Просмотрено мало фильмов')
  : personalMovieDB.count >= 10 < 30
  ? console.log('Вы классический зритель')
  : personalMovieDB.count >= 30
  ? console.log('Вы киноман')
  : console.log('Произошла ошибка');

  // ещё способ проверки условий
  if (personalMovieDB.count < 10) {
  console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.movies >= 10 < 30) {
  console.log('Вы классический зритель');
} else if (personalMovieDB.movies >= 30) {
  console.log('Вы киноман');
} else {
  console.log('Произошла ошибка');
}

console.log(personalMovieDB);
*/
