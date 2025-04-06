import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import options from '../models/options';
import { FilmDetail } from '../models/FilmDetail';

@Injectable({
  providedIn: 'root',
})
export class FilmServicesService {
  readonly url =
    'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';

  readonly findById = 'https://api.themoviedb.org/3/movie/';

  private http = inject(HttpClient);

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
}
