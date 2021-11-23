"use string"

const numberOfFilms = prompt ('Skolko filmov vi uje posmotreli?' , '') ;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

// const a = prompt ('Odin iz poslednix prosmotrennix filmov?', '') ,
//       b = prompt ('Na skolko ocenite yeqo?' , ''),
//       c = prompt ('Odin iz poslednix prosmotrennix filmov' , '') ,
//       d = prompt ('Na skolko ocenite yeqo?' , '');

// personalMovieDB.movies[a] = b ;
// personalMovieDB.movies[c] = d ;


for (let i = 0; i < 2 ; i++) {
    const a = prompt ('Odin iz poslednix prosmotrennix filmov?', '') ,
          b = prompt ('Na skolko ocenite yeqo?' , '');

    if(a != null && b != null && a!='' && b!= '' && a.length<50) {
        personalMovieDB.movies[a] = b ;
        console.log('done') ;
    }  else {
        console.log('error');
        i--;

    }
   
}



if(personalMovieDB.count< 10) {
   console.log('Prosmotreno malo filmov') ;
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
   console.log('Vi klassicheskiy zritel');
} else if (personalMovieDB.count >= 30) {
   console.log('Vi kinoman')
} else { 
    console.log('Proizoshla oshibka')
}

console.log(personalMovieDB) ;