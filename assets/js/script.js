import Reproductor from "./classes/Reproductor.js";

const musicaPlayer = new Reproductor(
    "https://www.youtube.com/embed/ydJsohhinwc?si=6s6JWfoANkH9KjjK",
    "musica"
);
const peliculaPlayer = new Reproductor(
    "https://www.youtube.com/embed/W_7x89YFIk0?si=FpgAyj47d4XXm5YI",
    "peliculas"
);
const seriePlayer = new Reproductor(
    "https://www.youtube.com/embed/8-5CKs4RfFA?si=QPHhKkqPMoX9Whw0",
    "series"
);

musicaPlayer.setInicio(30);
peliculaPlayer.setInicio(10);
seriePlayer.playMultimedia();
