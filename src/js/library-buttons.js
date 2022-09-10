import {createFilmsGallery} from './markups';
import { fetchTrendingMovies } from './filmoteka';
import { pagination } from './pagination';


const galleryLibrary = document.querySelector('.films-library')
const queueBtn = document.querySelector('[data-queue="data-queue"]');
const watchedBtn = document.querySelector('[data-watched="data-watched"]');

movieObject = [{
    id: 1,
    original_title: "Eternals",
    poster_path: "https://image.tmdb.org/t/p/w1280/lFByFSLV5WDJEv3KabbdAF959F2.jpg",
    title: "Eternals",
    release_date: "2021",
    vote_average: 7,
    genre_ids: [35, 16]
    
},
    {
        id: 2,
    original_title: "Eternals",
    poster_path: "https://image.tmdb.org/t/p/w1280/lFByFSLV5WDJEv3KabbdAF959F2.jpg",
    title: "Eternals",
    release_date: "2021",
    vote_average: 7,
    genre_ids: [35, 16]
    
    },
    {
        id: 3,
    original_title: "Eternals",
    poster_path: "https://image.tmdb.org/t/p/w1280/lFByFSLV5WDJEv3KabbdAF959F2.jpg",
    title: "Eternals",
    release_date: "2021",
    vote_average: 7,
    genre_ids: [35, 16]
    
    },
    {
        id: 4,
    original_title: "Eternals",
    poster_path: "https://image.tmdb.org/t/p/w1280/lFByFSLV5WDJEv3KabbdAF959F2.jpg",
    title: "Eternals",
    release_date: "2021",
    vote_average: 7,
    genre_ids: [35, 16]
    
    },
    {
        id: 5,
    original_title: "Eternals",
    poster_path: "https://image.tmdb.org/t/p/w1280/lFByFSLV5WDJEv3KabbdAF959F2.jpg",
    title: "Eternals",
    release_date: "2021",
    vote_average: 7,
    genre_ids: [35, 16]
    
    },
    {
        id: 6,
    original_title: "Eternals",
    poster_path: "https://image.tmdb.org/t/p/w1280/lFByFSLV5WDJEv3KabbdAF959F2.jpg",
    title: "Eternals",
    release_date: "2021",
    vote_average: 7,
    genre_ids: [35, 16]
    
    },
    {
        id: 7,
    original_title: "Eternals",
    poster_path: "https://image.tmdb.org/t/p/w1280/lFByFSLV5WDJEv3KabbdAF959F2.jpg",
    title: "Eternals",
    release_date: "2021",
    vote_average: 7,
    genre_ids: [35, 16]
    
    },
    {
        id: 8,
    original_title: "Eternals",
    poster_path: "https://image.tmdb.org/t/p/w1280/lFByFSLV5WDJEv3KabbdAF959F2.jpg",
    title: "Eternals",
    release_date: "2021",
    vote_average: 7,
    genre_ids: [35, 16]
    
},
    {
    id: 9,
    original_title: "Eternals",
    poster_path: "https://image.tmdb.org/t/p/w1280/lFByFSLV5WDJEv3KabbdAF959F2.jpg",
    title: "Eternals",
    release_date: "2021",
    vote_average: 7,
    genre_ids: [35, 16]
    
    },
    {
    id: 10,
    original_title: "Eternals",
    poster_path: "https://image.tmdb.org/t/p/w1280/lFByFSLV5WDJEv3KabbdAF959F2.jpg",
    title: "Eternals",
    release_date: "2021",
    vote_average: 7,
    genre_ids: [35, 16]
    
    },
    {
    id: 11,
    original_title: "Eternals",
    poster_path: "https://image.tmdb.org/t/p/w1280/lFByFSLV5WDJEv3KabbdAF959F2.jpg",
    title: "Eternals",
    release_date: "2021",
    vote_average: 7,
    genre_ids: [35, 16]
    
    },
    {
    id: 12,
    original_title: "Eternals",
    poster_path: "https://image.tmdb.org/t/p/w1280/lFByFSLV5WDJEv3KabbdAF959F2.jpg",
    title: "Eternals",
    release_date: "2021",
    vote_average: 7,
    genre_ids: [35, 16]
    
    },
    {
    id: 13,
    original_title: "Eternals",
    poster_path: "https://image.tmdb.org/t/p/w1280/lFByFSLV5WDJEv3KabbdAF959F2.jpg",
    title: "Eternals",
    release_date: "2021",
    vote_average: 7,
    genre_ids: [35, 16]
    
    },
    {   
    id: 14,
    original_title: "Eternals",
    poster_path: "https://image.tmdb.org/t/p/w1280/lFByFSLV5WDJEv3KabbdAF959F2.jpg",
    title: "Eternals",
    release_date: "2021",
    vote_average: 7,
    genre_ids: [35, 16]
    
}, {   
    id: 15,
    original_title: "Eternals",
    poster_path: "https://image.tmdb.org/t/p/w1280/lFByFSLV5WDJEv3KabbdAF959F2.jpg",
    title: "Eternals",
    release_date: "2021",
    vote_average: 7,
    genre_ids: [35, 16]
    
    },
     {   
    id: 16,
    original_title: "Eternals",
    poster_path: "https://image.tmdb.org/t/p/w1280/lFByFSLV5WDJEv3KabbdAF959F2.jpg",
    title: "Eternals",
    release_date: "2021",
    vote_average: 7,
    genre_ids: [35, 16]
    
    },
      {   
    id: 17,
    original_title: "Eternals",
    poster_path: "https://image.tmdb.org/t/p/w1280/lFByFSLV5WDJEv3KabbdAF959F2.jpg",
    title: "Eternals",
    release_date: "2021",
    vote_average: 7,
    genre_ids: [35, 16]
    
    },
       {   
    id: 18,
    original_title: "Eternals",
    poster_path: "https://image.tmdb.org/t/p/w1280/lFByFSLV5WDJEv3KabbdAF959F2.jpg",
    title: "Eternals",
    release_date: "2021",
    vote_average: 7,
    genre_ids: [35, 16]
    
},
 {   
    id: 19,
    original_title: "Eternals",
    poster_path: "https://image.tmdb.org/t/p/w1280/lFByFSLV5WDJEv3KabbdAF959F2.jpg",
    title: "Eternals",
    release_date: "2021",
    vote_average: 7,
    genre_ids: [35, 16]
    
    },
  {   
    id: 20,
    original_title: "Eternals",
    poster_path: "https://image.tmdb.org/t/p/w1280/lFByFSLV5WDJEv3KabbdAF959F2.jpg",
    title: "Eternals",
    release_date: "2021",
    vote_average: 7,
    genre_ids: [35, 16]
    
    },
   {   
    id: 21,
    original_title: "Eternals",
    poster_path: "https://image.tmdb.org/t/p/w1280/lFByFSLV5WDJEv3KabbdAF959F2.jpg",
    title: "Eternals",
    release_date: "2021",
    vote_average: 7,
    genre_ids: [35, 16]
    
}
]

localStorage.setItem('watched', JSON.stringify(movieObject));
const listOfMovies = localStorage.getItem('watched');
let arrayOFMovies = JSON.parse(listOfMovies);
console.log(arrayOFMovies.length);
if (arrayOFMovies.length > 20) {
    const pagin = pagination();
    const page = pagin.getCurrentPage();
    const total = arrayOFMovies.length;
    pagin.reset(total);
}


queueBtn.addEventListener('click', onclickQueue);
watchedBtn.addEventListener('click', onClickWatched);
queueBtn.disabled = false;

function onclickQueue(e) {
    const markup = createFilmsGallery(arrayOFMovies);
    galleryLibrary.innerHTML = markup;

    watchedBtn.disabled = false;
    queueBtn.classList.add('active');
    watchedBtn.classList.remove('active');
    queueBtn.disabled = true;

}
function onClickWatched(e) {

    fetchTrendingMovies(3).then(data => {
        console.log(data.results);
        const markup = createFilmsGallery(data.results);
        galleryLibrary.innerHTML = markup;
        if (data.results > 20) {
            const pagin = pagination();
            const page = pagin.getCurrentPage();
        }
            
});
    queueBtn.disabled = false;
    queueBtn.classList.remove('active');
    watchedBtn.classList.add('active');
    watchedBtn.disabled = true;
}


// pagin.on('beforeMove', event => {
//   // получаем номер активной страницы на кнопках
//   const currentPage = event.page;

//   // получаем фильмы согласно страницы
//   fetchTrendingMovies(currentPage).then(data => {
//     const markup = createFilmsGallery(data.results);
//     gallery.innerHTML = markup;
//   });
// });