export default [

  {
    src: "https://tunein.com/embed/player/s296799/",
    img: "./img-radia/STAR-FM-Blues-Rock.png",
    title: "Rádio STAR FM Blues Rock",
  },
  {
    src: "https://tunein.com/embed/player/s168069/",
    img: "./img-radia/Route-66-Classic-Rock.png",
    title: "Rádio Route 66 Classic Rock",
  },
  {
    src: "https://tunein.com/embed/player/s255678/",
    img: "./img-radia/Blues.webp",
    title: "Rádio Blues",
  },
];





import videos from "./blues.js";

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