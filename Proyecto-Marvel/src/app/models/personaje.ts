import { Thumbnail } from "./thumbnail";

export interface Personaje {
  id: string;
  name: string;
  description: string;
  thumbnail: Thumbnail;

}

let initPersonaje: Personaje = {
  id: '0',
  name: '',
  description: '',
  thumbnail: {
    path: '',
    extension: ''
  }
}

export { initPersonaje }
