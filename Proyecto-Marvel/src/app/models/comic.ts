import { Thumbnail } from "./thumbnail";

export interface Comic {
  id: string;
  title: string;
  description: string;
  thumbnail: Thumbnail;

}

let initComic: Comic = {
  id: '0',
  title: '',
  description: '',
  thumbnail: {
    path: '',
    extension: ''
  }
}

export { initComic }
