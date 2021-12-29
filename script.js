console.log('welcom to audio tv')
console.log('hello')
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterplay = document.getElementById("masterPlay");

let gif = document.getElementById("gif")
let masterSongName = document.getElementById('masterSongName');
let myProgressBar = document.getElementById("myProgressBar");
let previous = document.getElementById("previous");
let next = document.getElementById("next");
let songitem = Array.from(document.getElementsByClassName("songItem"));

const songs = [
    {songName: "Aga Bai", filePath:"songs/1.mp3",coverPath:"cover3.jpg"},
    {songName: "Bol Bachchan", filePath:"songs/2.mp3",coverPath:"cover3.jpg"},
    {songName: "Chalao Na Naino se..", filePath:"songs/3.mp3",coverPath:"cover3.jpg"},
    {songName: "Dagabazz Re", filePath:"songs/4.mp3",coverPath:"cover3.jpg"},
    {songName: "Kafirana", filePath:"songs/5.mp3",coverPath:"cover3.jpg"},
    {songName: "laagi Na chhute", filePath:"songs/6.mp3",coverPath:"cover3.jpg"},
    {songName: "Piyaa O re Piya", filePath:"songs/7.mp3",coverPath:"cover3.jpg"},
    {songName: "Pandey ji siti", filePath:"songs/8.mp3",coverPath:"cover3.jpg"},
    {songName: "sonOf sardar", filePath:"songs/9.mp3",coverPath:"cover3.jpg"},
    {songName: "tinku jiya remix", filePath:"songs/10.mp3",coverPath:"cover3.jpg"}
];

masterplay.addEventListener("click",()=>{
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterplay.classList.remove("fa-play-circle");
        masterplay.classList.add("fa-pause-circle")
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterplay.classList.remove("fa-pause-circle");
        masterplay.classList.add("fa-play-circle")
        gif.style.opacity =0;
    }
    
});
audioElement.addEventListener("timeupdate",()=>{
    // console.log("timeupdate");
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    //  console.log(progress);
     myProgressBar.value=progress;
})

myProgressBar.addEventListener("change",()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})
 
songitem.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText= songs[i].songName;
    console.log('audioElement.duration')
});
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{ 
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterplay.classList.remove('fa-play-circle');
        masterplay.classList.add('fa-pause-circle');
    })
})

document.getElementById("next").addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');

})

document.getElementById("previous").addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-pause-circle');
})




