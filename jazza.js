export default [

  {
    src: "https://tunein.com/embed/player/s34682/",
    img: "./img-radia/Jazz24.webp",
    title: "Rádio Jazz24",
  },
  {
    src: "https://tunein.com/embed/player/s31229/",
    img: "./img-radia/JAZZ.FM91.webp",
    title: "Rádio JAZZ.FM91",
  },
  {
    src: "https://tunein.com/embed/player/s37062/",
    img: "./img-radia/KJAZZ-88.1.webp",
    title: "Rádio KJAZZ 88.1",
  },
  {
    src: "https://tunein.com/embed/player/s307990/",
    img: "./img-radia/Antena-2-Jazz-In.webp",
    title: "Rádio Antena 2 Jazz In",
  },

];



import videos from "./jazza.js";

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