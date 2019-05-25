import { Injectable } from '@angular/core';
import { Film } from '../app/entities/films';

@Injectable({
  providedIn: 'root'
})
export class TemporaryDataService {

  static films: Film[] = [
        {_id: "5cc47400ec8586651cc0366b",
        Title: "Pusher",
        Year: 1996,
        Rated: "Not Rated",
        Released: "1996-08-29T22:00:00.000Z",
        Runtme: 110,
        Genre: "Crime, Thriller",
        Director: "Nicolas Winding Refn",
        Writer: "Jens Dahl, Nicolas Winding Refn",
        Actors: "Kim Bodnia, Zlatko Buric, Laura Drasbæk, Slavko Labovic",
        Plot: "A drug pusher grows increasingly desperate after a botched deal leaves him with a large debt to a ruthless drug lord.",
        Language: "Danish, Swedish, Serbian",
        Country: "Denmark",
        Awards: "1 win.",
        Poster: "https://m.media-amazon.com/images/M/MV5BMTJhYmJmYjgtNDNkNy00NWNlLTkxMDctMWI0MzVkZWMxMjljXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
        Likes: 222,
        Comments: [],
        VideoSource: "https://www.radiantmediaplayer.com/media/bbb-360p.mp4",
        Type: "movie" 
      },
      {
      _id: "5cdeb08e3a0498080c8198ef",
      Title: "A war",
      Year: 2015,
      Rated: "r",
      Released: "2015-09-09T22:00:00.000Z",
      Runtme: 115,
      Genre: "Crime, Drama, War",
      Director: "Tobias Lindholm",
      Writer: "Tobias Lindholm",
      Actors: "Pilou Asbæk, Tuva Novotny, Søren Malling, Charlotte Munck",
      Plot: "The story of a Danish commander, who is accused of civil murder in Afghanistan, while trying to save his squad.",
      Language: "Danish, Arabic, English",
      Country: "Denmark, France",
      Awards: "7 wins",
      Poster: "https://m.media-amazon.com/images/M/MV5BMjA1ODY3NjQzNV5BMl5BanBnXkFtZTgwNjEzNTUxNzE@._V1_SX300.jpg",
      Type: "movie",
      Likes: 0,
      Comments: [],
      VideoSource: "https://ia800209.us.archive.org/20/items/ElephantsDream/ed_1024.mp4",}
    
  ]

  constructor() { }
}
