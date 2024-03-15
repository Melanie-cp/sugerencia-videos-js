import { Multimedia } from "./multimedia.js";
import { iifeDOM } from "./iifeDOM.js";

export class Reproductor extends Multimedia {
    _id;
    constructor(url, id) {
        super(url)
        this._id = id
    }

    playMultimedia() {
        iifeDOM.funcionPublica(this.url, this._id)
    }

    setInicio(tiempo) {
        this.url += `?start=${tiempo}`
    }
}