export default [

  {
    src: "https://tunein.com/embed/player/s84481/",
    img: "./img-radia/Rádio-FFH-The-80's.webp",
    title: "Rádio FFH The 80's",
  },
  {
    src: "https://tunein.com/embed/player/s297204/",
    img: "./img-radia/Rádio-80s-ALIVE.webp",
    title: "Rádio 80s ALIVE",
  },
  {
    src: "https://tunein.com/embed/player/s104684/",
    img: "./img-radia/Rádio-104.6-RTL-80er.png",
    title: "Rádio 104.6 RTL 80er",
  },
  {
    src: "https://tunein.com/embed/player/s307829/",
    img: "./img-radia/Rádio-JOE-Nederland.webp",
    title: "Rádio JOE Nederland",
  },
  {
    src: "https://tunein.com/embed/player/s156378/",
    img: "./img-radia/Rádio-Regenbogen-80er.jpg",
    title: "Rádio Regenbogen 80er",
  },
  {
    src: "https://tunein.com/embed/player/s298146/",
    img: "./img-radia/Classic-Hits-109-70s,-80s,-90s.webp",
    title: "Classic Hits 109 - 70s, 80s, 90s",
  },
  {
    src: "https://tunein.com/embed/player/s74100/",
    img: "./img-radia/Rádio-80.png",
    title: "Rádio 80",
  },
  {
    src: "https://tunein.com/embed/player/s209117/",
    img: "./img-radia/Rádio-PulsRadio-80.png",
    title: "Rádio PulsRadio 80",
  },
  {
    src: "https://tunein.com/embed/player/s194478/",
    img: "./img-radia/Rádio-KINK80s.jpg",
    title: "Rádio KINK80s",
  },
  {
    src: "https://tunein.com/embed/player/s307517/",
    img: "./img-radia/Nostalgie-Pop-80.png",
    title: "Rádio Nostalgie Pop 80",
  },
  {
    src: "https://tunein.com/embed/player/s140963/",
    img: "./img-radia/Made-in-80.webp",
    title: "Made in 80",
  },
];





import videos from "./anos80.js";

function loadVideos() {
  const playlist_area = document.querySelector(".playlist");

  videos.forEach((video, index) => {
    const div = document.createElement("div");

    div.innerHTML = `
      <div class="playlist-video ${index + 1 === 1 && "active"}">
  
        <videos  src=${video.src} muted></videos>
<img class="playlist-video-img" src=${video.img}>
        <label class="playlist-video-info">${video.title}</label>

        

      </div>
    `;

    playlist_area.appendChild(div);
  });

  addOnClick();
}

function addOnClick() {
  const video_main = document.querySelector(".main-video-content");
  const playlist_video = document.querySelectorAll(".playlist-video");

  playlist_video.forEach((item, i) => {
    if (!i) {
      setVideo(video_main, item);
    }

    item.onclick = () => {
      playlist_video.forEach((video) => video.classList.remove("active"));
      item.classList.add("active");

      setVideo(video_main, item);
    };
  });
}

function setVideo(video_main, item) {
  video_main.children[0].src = item.children[0].getAttribute("src");
  video_main.children[1].innerHTML = item.children[1].innerHTML;
}

loadVideos();