import Multimedia from "./Multimedia.js";
import reproducirVideo from "../functions/reproducirVideo.js";

class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this._id = id;
    }

    get id() {
        return this._id;
    }

    playMultimedia() {
        reproducirVideo.insertarVideo(this._url, this._id);
    }

    setInicio(time) {
        reproducirVideo.insertarVideo(`${this._url}&start=${time}`, this._id);
    }
}

export default Reproductor;
