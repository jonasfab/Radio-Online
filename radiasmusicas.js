export default [
  {
    src: "https://tunein.com/embed/player/s86725/",
    img: "./img-radia/Rádio-MIX-FM.webp",
    title: "Rádio MIX FM",
   
  },
  {
    src: "https://tunein.com/embed/player/p989429/",
    img: "./img-radia/Rádio-Mix-Tudo.png",
    title: "Rádio Mix Tudo",
  },
  {
    src: "https://tunein.com/embed/player/s8332/",
    img: "./img-radia/Rádio-Dumont-FM.webp",
    title: "Rádio Dumont FM",
  },
  {
    src: "https://tunein.com/embed/player/s118850/",
    img: "./img-radia/Rádio-105-FM.jpg",
    title: "Rádio 105 FM",
  },
  {
    src: "https://tunein.com/embed/player/s8129/",
    img: "./img-radia/Alpha-FM-São-Paulo.webp",
    title: "Alpha FM São Paulo",
  },
  {
    src: "https://tunein.com/embed/player/s104924/",
    img: "img-radia/Rádio-Atlântida-FM.webp",
    title: "Rádio Atlântida FM",
  },
  {
    src: "https://tunein.com/embed/player/s67624/",
    img: "img-radia/Rádio-Antena-1.webp",
    title: "Rádio Antena 1",
  },
  {
    src: "https://tunein.com/embed/player/s85253/",
    img: "img-radia/Rádio-Saudade-FM.webp",
    title: "Rádio Saudade FM",
  },

  {
    src: "https://tunein.com/embed/player/s143777/",
    img: "img-radia/Rádio-Classic-Pan-Jovem-Pan.png",
    title: "Rádio Classic Pan Jovem Pan",
  },
  {
    src: "https://tunein.com/embed/player/s85089/",
    img: "img-radia/Rádio-89-FM-A-Rádio-Rock.webp",
    title: "Rádio 89 FM A Rádio Rock",
  },
  {
    src: "https://tunein.com/embed/player/s7063/",
    img: "img-radia/Rádio-BHFM.webp",
    title: "Rádio BHFM",
  },
  {
    src: "https://tunein.com/embed/player/s264202/",
    img: "img-radia/Rádio-Hunter.FM-Sertanejo.webp",
    title: "Rádio Hunter.FM - Sertanejo",
  },
  {
    src: "https://tunein.com/embed/player/s6999/",
    img: "img-radia/Rádio-Metropolitana-FM.webp",
    title: "Rádio Metropolitana FM",
  },
  {
    src: "https://tunein.com/embed/player/s299977/",
    img: "img-radia/Radio-Disney.webp",
    title: "Rádio Disney",
  },
  {
    src: "https://tunein.com/embed/player/s126960/",
    img: "img-radia/Clube-FM.webp",
    title: "Rádio Clube FM",
  },
  {
    src: "https://tunein.com/embed/player/s6998/",
    img: "img-radia/Rádio-FM-O-Dia.webp",
    title: "Rádio FM O Dia",
  },

];





import videos from "./radiasmusicas.js";

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