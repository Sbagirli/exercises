"use string"

let numberOfFilms = +prompt ('Skolko filmov vi uje posmotreli?' , '') ;

function start() {
    numberOfFilms = +prompt ('Skolko filmov vi uje posmotreli?' , '') ;  
    
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt ('Skolko filmov vi uje posmotreli?' , '') ;  
    }
}


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


function rememberMyFilms() {
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
}

// remembetMyFilms() ;





function detectPersonalLevel() {
    if(personalMovieDB.count< 10) {
        console.log('Prosmotreno malo filmov') ;
     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30 ) {
        console.log('Vi klassicheskiy zritel');
     } else if (personalMovieDB.count >= 30) {
        console.log('Vi kinoman') ;
     } else { 
         console.log('Proizoshla oshibka') ;
     }



}

// detectPersonalLevel() ;

function showMyDB(hidden) {
         if(!hidden) {
            console.log(personalMovieDB) ;

         }



}

showMyDB(personalMovieDB.privat) ;


function writeYourGenres() {
     for (let i = 1; i <= 3; i++) {
                          personalMovieDB.genres[i - 1] = prompt (`Vash lubimiy janr po nomerom ${i}`) ;

     }

}

writeYourGenres() ;