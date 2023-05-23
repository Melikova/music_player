const mp3_list = [
    {
        id: 001,
        artist: "Emmanuel Moir",
        mp3: "2.mp3",
        name: 'Beau Malheur',
        youtube: 'https://www.youtube.com/watch?v=EHkn5bjm3nI',
        photo: "https://img.freepik.com/free-photo/abstract-colorful-splash-3d-background-generative-ai-background_60438-2509.jpg"
    },
    {
        id: 002,
        artist: "Emmanuel Moir",
        mp3: "3.mp3",
        name: 'Beau Malheur',
        youtube: 'https://www.youtube.com/watch?v=EHkn5bjm3nI',
        photo: "https://img.freepik.com/free-photo/abstract-colorful-splash-3d-background-generative-ai-background_60438-2509.jpg"
    }
];

let favorites_list = [001];

// Select all the elements in the HTML page
// and assign them to a variable

let favorite = document.querySelector('#favorite');
let open_link = document.querySelector('#open_link');
let prev_track = document.querySelector('#prev_track');
let next_track = document.querySelector('#next_track');
let play_pause = document.querySelector('#play_pause');
let artist_name = document.querySelector('#artist_name');
let mp3_name = document.querySelector('#mp3_name');
let duration = document.querySelector('#duration');
let progress_current = document.querySelector('#progress_current');
let progress_time = document.querySelector('#progress_time');


// Specify globally used values
let current_track = {}; 
let isPlaying = false;

// Function add to favorites
function addToFav(){
    favorites_list.push(current_track.id);
}

// Function to reset all values to their default
function resetValues() {
    progress_time.textContent = "00:00";
    duration.textContent = "00:00";
    progress_current.style.width = 0;
}







