type IGenre = {
    genre: string
}

type ICountry = {
    country: string
}

export type IFilmFetch = {
    total: number,
    totalPages: number,
    items: IFilm[]
}

export type IFilm = {
    countries?: ICountry[],
    genres: IGenre[],
    imdbId?: number | null,
    kinopoiskId: number,
    nameEn?: string | null,
    nameOriginal?: string | null,
    nameRu:string | null,
    posterUrl: string,
    posterUrlPreview?: string,
    ratingImdb?: number | null,
    ratingKinopoisk: number,
    type?: string,
    year: number
}

export type IFilmExemplar = {
    film: IFilm,
}