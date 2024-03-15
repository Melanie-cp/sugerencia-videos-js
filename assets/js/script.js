import { Reproductor } from "./reproductor.js";

const musica = new Reproductor("https://www.youtube.com/embed/Qr7XRUiQvrQ?si=huiu-0cF8cMUHHPQ", "musica");
const peliculas = new Reproductor("https://www.youtube.com/embed/U2Qp5pL3ovA?si=rtBoacR__Q5QSPkM", "peliculas");
const series = new Reproductor("https://www.youtube.com/embed/gBmkI4jlaIo?si=WGu2zHM2FzzQNxRi", "series");


musica.playMultimedia()
peliculas.playMultimedia()
series.playMultimedia()

musica.setInicio(30)