/*
This model is a blueprint for whatever we create
I mean concerning Films, ofc.
So whenever you do something with Films, you'll
refer to that model.
Again, it's JUST a model, a blueprint, instructions to follow.
 */
export class FilmModel {
  constructor(
  public _id: string,
  public Title: string,
  public Year: number,
  public Rated: string,
  public Released: string,
  public Runtime: number,
  public Genre: string,
  public Director: string,
  public Writer: string,
  public Actors: string,
  public Plot: string,
  public Language: string,
  public Country: string,
  public Awards: string,
  public Poster: string,
  public Type: string,
  public Likes: number,
  public Comments: [],
  public VideoSource: string,
  ) {  }
}
