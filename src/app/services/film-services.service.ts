import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import options from '../models/options';

@Injectable({
  providedIn: 'root',
})
export class FilmServicesService {
  readonly url =
    'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';

  private http = inject(HttpClient);

  getMovie(page: number) {
    return this.http.get<any>(
      `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
      options
    );
  }
}
