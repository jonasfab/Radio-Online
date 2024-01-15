export default [

  {
    src: "https://tunein.com/embed/player/s25953/",
    img: "./img-radia/Das-Inselradio-Mallorca.png",
    title: "Rádio Das Inselradio Mallorca",
  },
  {
    src: "https://tunein.com/embed/player/s279223/",
    img: "./img-radia/89,0-RTL-Mais-Procurados.webp",
    title: "89,0 RTL Mais Procurados",
  },
  {
    src: "https://tunein.com/embed/player/s124694/",
    img: "./img-radia/Indaiatuba.png",
    title: "Rádio Indaiatuba",
  },
  {
    src: "https://tunein.com/embed/player/s67814/",
    img: "./img-radia/BATER.webp",
    title: "Rádio BATER!",
  },
  {
    src: "https://tunein.com/embed/player/s2398/",
    img: "./img-radia/Q-Música-Bélgica.webp",
    title: "Rádio Q Música Bélgica",
  },
];





import videos from "./pop.js";

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