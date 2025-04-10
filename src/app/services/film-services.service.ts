import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import options from '../models/options';
import { FilmDetail } from '../models/FilmDetail';
import { TvShow } from '../models/TV-Show';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FilmServicesService {
  readonly url =
    'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';

  readonly findById = 'https://api.themoviedb.org/3/movie/';

  readonly urlTV =
    'https://api.themoviedb.org/3/discover/tv?include_adult=true&include_null_first_air_dates=false&language=en-US&page=2&sort_by=popularity.desc';

  private http = inject(HttpClient);

  favorites: number[] = [];

  getMovie(page: number) {
    return this.http.get<any>(
      `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
      options
    );
  }

  getFilmById(id: number) {
    if (id === null) return;

    return this.http.get<FilmDetail>(
      `https://api.themoviedb.org/3/movie/${id}`,
      options
    );
  }

  getTVShows(page: number) {
    return this.http.get<any>(
      `https://api.themoviedb.org/3/discover/tv?include_adult=true&include_null_first_air_dates=false&language=en-US&page=${page}&sort_by=popularity.desc`,
      options
    );
  }

  getCategories(): [Observable<any>, Observable<any>] {
    return [
      this.http.get<any>(
        'https://api.themoviedb.org/3/genre/movie/list',
        options
      ),
      this.http.get<any>('https://api.themoviedb.org/3/genre/tv/list', options),
    ];
  }
}
