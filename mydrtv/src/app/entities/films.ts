export class Film {
  _id: string; // Users does not fill out
  Title: string;
  Year: number;
  Rated: string;
  Released: string;
  Runtme: number;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string; // Only key actors!
  Plot: string; // Short description
  Language: string; // E.X Pusher is in Danish, Swedish, and Serbian.
  Country: string;
  Awards: string;
  Poster: string; // URL for the poster
  Type: string; // Is it a movie or a TV Series? Or a Short Series?
  Likes: number;
  Comments: [];
  VideoSource: string; // That's the URL for the movie
}
