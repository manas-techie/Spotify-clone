console.log("Welcome to spotify");
// initialize the variables
let songIndex = 0;
let audioElement = new Audio('assest/songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar')
let masterSongName = document.getElementById('masterSongName')
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItems'));
let slavePlay = Array.from(document.getElementsByClassName('slavePlay'));


let songs = [
    { SongName: "Love You", filePath: "assest/songs/1.mp3", coverPath: "assest/covers/1.jpg" },
    { SongName: "Feel Me", filePath: "assest/songs/2.mp3", coverPath: "assest/covers/2.jpg" },
    { SongName: "Miss You", filePath: "assest/songs/3.mp3", coverPath: "assest/covers/3.jpg" },
    { SongName: "I Am The Bad Bitch", filePath: "assest/songs/4.mp3", coverPath: "assest/covers/4.jpg" },
    { SongName: "So Am I", filePath: "assest/songs/5.mp3", coverPath: "assest/covers/5.jpg" },
    { SongName: "Let Me Love You", filePath: "assest/songs/6.mp3", coverPath: "assest/covers/6.jpg" },
    { SongName: "Roar", filePath: "assest/songs/7.mp3", coverPath: "assest/covers/7.jpg" },
    { SongName: "Just A Dream", filePath: "assest/songs/8.mp3", coverPath: "assest/covers/8.jpg" },
    { SongName: "He Loves Me", filePath: "assest/songs/9.mp3", coverPath: "assest/covers/9.jpg" },
    { SongName: "Beauty And A Beast", filePath: "assest/songs/10.mp3", coverPath: "assest/covers/10.jpg" },

]

songItems.forEach((element, i) => {
    console.log(element, i);
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerHTML = songs[i].SongName;
})



// audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        makeAllPlays();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})


//Listen to Events
audioElement.addEventListener('timeupdate', () => {
    console.log('timeupdate');
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

let makeAllPlays = () => {
    slavePlay.forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

slavePlay.forEach((element) => {
    element.addEventListener('click', (ele) => {
        makeAllPlays();
        ele.target.classList.remove('fa-play-circle');
        ele.target.classList.add('fa-pause-circle');
        songIndex = parseInt(ele.target.id);
        audioElement.src = `assest/songs/${songIndex + 1}.mp3`;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
        masterSongName.innerHTML = songs[songIndex].SongName;

    })
})


document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0;
    }
    else {
        songIndex--;
    }
    audioElement.src = `assest/songs/${songIndex + 1}.mp3`;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
    masterSongName.innerHTML = songs[songIndex].SongName;
})


document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 9;
    } else {
        songIndex++;
    }
    audioElement.src = `assest/songs/${songIndex + 1}.mp3`;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
    masterSongName.innerHTML = songs[songIndex].SongName;
})