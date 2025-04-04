import { Component, OnInit } from '@angular/core';
import FilmHome from '../../models/FilmHome';
import { HttpClient } from '@angular/common/http';
import options from '../../models/options';

@Component({
  selector: 'app-film-list',
  imports: [],
  templateUrl: './film-list.component.html',
  styleUrl: './film-list.component.css',
})
export class FilmListComponent implements OnInit {
  movie: FilmHome[];

  readonly url =
    'https://api.themoviedb.org/3/person/popular?language=en-US&page=1';

  constructor(private http: HttpClient) {
    this.movie = [];
  }

  ngOnInit(): void {
    this.getMovie();
  }

  getMovie() {
    this.http.get<any>(this.url, options).subscribe({
      next: (data) => {
        this.movie = data.results;
        console.log(this.movie);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
