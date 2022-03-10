const API_KEY = 'api_key=efbf02374fe534aa08c13ca1873bc1f7';
const BASE_URL = 'https://api.themoviedb.org/3';
const TOP_PLAY = BASE_URL + '/movie/top_rated?'+API_KEY+'&page=1';
const NOW_PLAY = BASE_URL + '/movie/now_playing?'+API_KEY+'&page=1';
const POP_PLAY = BASE_URL + '/movie/popular?'+API_KEY+'&page=1';
const UP_PLAY = BASE_URL + '/movie/upcoming?'+API_KEY+'&page=1';
const TV_PLAY = BASE_URL + '/tv/popular?'+API_KEY+'&language=en-US';
const IMG_URL = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_URL = BASE_URL+'/search/movie?'+API_KEY;

const toprated = document.getElementById('toprated');
const nowplay = document.getElementById('nowplay');
const form = document.getElementById('form');
const search = document.getElementById('search');
const populer = document.getElementById('populer');
const upcoming = document.getElementById('akandatang');
const tvshow = document.getElementById('tvshow');


getToprate(TOP_PLAY);
getNowPlay(NOW_PLAY);
getPopular(POP_PLAY);
getUpcoming(UP_PLAY);
getTvshow(TV_PLAY);

function getToprate(url) 
{
  fetch(url).then(res => res.json().then(data => {
    console.log(data.results)
    showToprate(data.results);
  }))
}

function getNowPlay(url) 
{
  fetch(url).then(res => res.json().then(data => {
    console.log(data.results)
    showNowPlay(data.results);
  }))
}

function getPopular(url) 
{
  fetch(url).then(res => res.json().then(data => {
    console.log(data.results)
    showPopular(data.results);
  }))
}

function getUpcoming(url) 
{
  fetch(url).then(res => res.json().then(data => {
    console.log(data.results)
    showUpcoming(data.results);
  }))
}

function getTvshow(url) 
{
  fetch(url).then(res => res.json().then(data => {
    console.log(data.results)
    showTvshow(data.results);
  }))
}


function showPopular(data)
{
  populer.innerHTML = '<div class="row row--grid" id="populer">';

  data.forEach(movie => {
    data.splice(18);
    const {title, poster_path, vote_average, release_date} = movie;
    const movieE2 = document.createElement('div');
    movieE2.classList.add('col-6', 'col-sm-4', 'col-lg-3', 'col-xl-2');
    movieE2.innerHTML = `
    <div class="card">
    <a href="details.html" class="card__cover">
      <img src="${poster_path? IMG_URL+poster_path: "http://via.placeholder.com/192x270"}" alt="">
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </a>
    <span class="card__rating"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z"/></svg> ${vote_average}</span>
    <h3 class="card__title"><a href="details.html">${title}</a></h3>
    <ul class="card__list">
      <li>${release_date}</li>
    </ul>
  </div>
    `
    populer.appendChild(movieE2)
  });
}

function showUpcoming(data)
{
  upcoming.innerHTML = '<div class="row row--grid" id="akandatang">';

  data.forEach(movie => {
    data.splice(18);
    const {title, poster_path, vote_average, genre_ids, release_date} = movie;
    const movieE3 = document.createElement('div');
    movieE3.classList.add('col-6', 'col-sm-4', 'col-lg-3', 'col-xl-2');
    movieE3.innerHTML = `
    <div class="card">
    <a href="details.html" class="card__cover">
      <img src="${IMG_URL+poster_path}" alt="">
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </a>
    <span class="card__rating"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z"/></svg> ${vote_average}</span>
    <h3 class="card__title"><a href="details.html">${title}</a></h3>
    <ul class="card__list">
    <li>${release_date}</li>
    </ul>
  </div>
    `
    upcoming.appendChild(movieE3)
  });
}

function showNowPlay(data)
{
  
  nowplay.innerHTML = '<div class="row row--grid" id="nowplay">';

  data.forEach(movie => {
    data.splice(18);
    const {title, poster_path, vote_average, release_date, genre_ids} = movie;
    const movieE3 = document.createElement('div');
    movieE3.classList.add('col-6', 'col-sm-4', 'col-lg-3', 'col-xl-2');
    movieE3.innerHTML= `
    <div class="card">
    <a href="details.html" class="card__cover">
      <img src="${IMG_URL+poster_path}" alt="">
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </a>
    <span class="card__rating"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z"/></svg> ${vote_average}</span>
    <h3 class="card__title"><a href="details.html">${title}</a></h3>
    <ul class="card__list">
    <li>${release_date}</li>
    </ul>
  </div>
    `
    nowplay.appendChild(movieE3)
  });
}

function showTvshow(data)
{
  tvshow.innerHTML = '<div class="row row--grid" id="tvshow">';

  data.forEach(tv => {
    data.splice(18);
    const {name, poster_path, vote_average, origin_country, first_air_date} = tv;
    const tv1 = document.createElement('div');
    tv1.classList.add('col-12', 'col-md-6', 'col-xl-4');
    tv1.innerHTML= `
    <div class="card card--big">
    <a href="details.html" class="card__cover">
      <img src="${IMG_URL+poster_path}" alt="${name}">
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </a>
    <span class="card__rating"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z"/></svg> ${vote_average}</span>
    <div class="card__content">
      <h3 class="card__title"><a href="details.html">${name}</a></h3>
      <ul class="card__list">
        <li>${first_air_date}</li>
      </ul>
      <ul class="card__info">
        <li><span>Country: </span><span><a href="#">${origin_country}</a></span></li>
      </ul>
    </div>
  </div>
    `
    tvshow.appendChild(tv1)
  });
}

// function getgenre(nama_genre) 
// {
//   if (nama_genre == 28)
//   {
//     return "Action"
//   }
//   else if (nama_genre = 12)
//   {
//     return "Adventure"
//   }
//   else if (nama_genre = 16)
//   {
//     return "Animation"
//   }
//   else if (nama_genre = 35)
//   {
//     return "Comedy"
//   }
//   else if (nama_genre = 80)
//   {
//     return "Crime"
//   }
//   else if (nama_genre = 99)
//   {
//     return "Documentary"
//   }
//   else if (nama_genre = 18)
//   {
//     return "Drama"
//   }
//   else if (nama_genre = 10751)
//   {
//     return "Family"
//   }
//   else if (nama_genre = 14)
//   {
//     return "Fantasy"
//   }
//   else if (nama_genre = 36)
//   {
//     return "History"
//   }
//   else if (nama_genre = 27)
//   {
//     return "Horror"
//   }
//   else if (nama_genre = 10402)
//   {
//     return "Music"
//   }
//   else if (nama_genre = 9648)
//   {
//     return "Mystery"
//   }
//   else if (nama_genre = 10749)
//   {
//     return "Romance"
//   }
//   else if (nama_genre = 878)
//   {
//     return "SciFi"
//   }
//   else if (nama_genre = 10770)
//   {
//     return "TV Movie"
//   }
//   else if (nama_genre = 53)
//   {
//     return "Thriller"
//   }
//   else if (nama_genre = 10752)
//   {
//     return "War"
//   }
//   else if (nama_genre = 37)
//   {
//     return "Western"
//   }
//   else
//   {
//     return "Unknown"
//   }
// }

function showgenres(movie) {  
  movie.genres.forEach((genre) => {
      const {name} = genre;
      return name
  })
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const searchTerm = search.value;

  if(searchTerm)
  {
    searchMovies(POP_PLAY);

  function searchMovies(url) 
  {
    fetch(url).then(res => res.json().then(data => {
      console.log(data.results)
      TsearchMovies(data.results);
    }))
  }
    searchMovies(SEARCH_URL+'&query='+searchTerm)

    function TsearchMovies(data)
    {
      populer.innerHTML = `<div class="row row--grid" id="populer">`;
      data.forEach(movie => {
        
        data.splice(18);
        const {title, poster_path, vote_average, release_date} = movie;
        const movieS1 = document.createElement('div');
        movieS1.classList.add('col-6', 'col-sm-4', 'col-lg-3', 'col-xl-2');
        movieS1.innerHTML = `
        <div class="card">
        <a href="details.html" class="card__cover">
          <img src="${poster_path? IMG_URL+poster_path: "img/card/1.png"}" alt="${title}">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11 1C16.5228 1 21 5.47716 21 11C21 16.5228 16.5228 21 11 21C5.47716 21 1 16.5228 1 11C1 5.47716 5.47716 1 11 1Z" stroke-linecap="round" stroke-linejoin="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M14.0501 11.4669C13.3211 12.2529 11.3371 13.5829 10.3221 14.0099C10.1601 14.0779 9.74711 14.2219 9.65811 14.2239C9.46911 14.2299 9.28711 14.1239 9.19911 13.9539C9.16511 13.8879 9.06511 13.4569 9.03311 13.2649C8.93811 12.6809 8.88911 11.7739 8.89011 10.8619C8.88911 9.90489 8.94211 8.95489 9.04811 8.37689C9.07611 8.22089 9.15811 7.86189 9.18211 7.80389C9.22711 7.69589 9.30911 7.61089 9.40811 7.55789C9.48411 7.51689 9.57111 7.49489 9.65811 7.49789C9.74711 7.49989 10.1091 7.62689 10.2331 7.67589C11.2111 8.05589 13.2801 9.43389 14.0401 10.2439C14.1081 10.3169 14.2951 10.5129 14.3261 10.5529C14.3971 10.6429 14.4321 10.7519 14.4321 10.8619C14.4321 10.9639 14.4011 11.0679 14.3371 11.1549C14.3041 11.1999 14.1131 11.3999 14.0501 11.4669Z" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </a>
        <span class="card__rating"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z"/></svg> ${vote_average}</span>
        <h3 class="card__title"><a href="details.html">${title}</a></h3>
        <ul class="card__list">
          <li>${release_date}</li>
        </ul>
      </div>
        `
    
        populer.appendChild(movieS1);
      });
      
    }
  }
  else
  {
    searchMovies(POP_PLAY);
  }
})