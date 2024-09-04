import { IFilmExemplar } from "../../interfaces/IFilm";
import filmCard from "../FilmCard/filmCard.module.css";

const FilmCard: React.FC<IFilmExemplar> = ({ film }: IFilmExemplar) => {
  const genre_arr = () => {
    let genre_string: string[] = [];
    for (let i = 0; i < film.genres.length; i++) {
      genre_string.push(film.genres[i].genre);
    }
    return genre_string;
  };
  const genre_ar = genre_arr();

  return (
    <div className={filmCard.card}>
      <img src={film.posterUrl} className={filmCard.image} />
      <div className={filmCard.text_area}>
        <p className={filmCard.text}>
          {film.nameRu != null
            ? film.nameRu
            : film.nameEn != null
            ? film.nameEn
            : film.nameOriginal}
        </p>
        <p className={filmCard.text}>Рейтинг: {film.ratingKinopoisk}</p>
        <p className={filmCard.text_genre}>{genre_ar.join(", ")}</p>
      </div>
    </div>
  );
};

export default FilmCard;
