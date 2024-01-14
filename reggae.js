export default [

  {
    src: "https://tunein.com/embed/player/s214804/",
    img: "./img-radia/Rastafari-Jams.webp",
    title: "Rádio Rastafari Jams",
  },
  {
    src: "https://tunein.com/embed/player/s98683/",
    img: "./img-radia/1.FM-Reggae.webp",
    title: "Rádio 1.FM Reggae",
  },
  {
    src: "https://tunein.com/embed/player/s193524/",
    img: "./img-radia/Planeta-Reggae.jpg",
    title: "Rádio Planeta Reggae",
  },
];





import videos from "./reggae.js";

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