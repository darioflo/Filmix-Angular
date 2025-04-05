import { Component, OnInit } from '@angular/core';
import FilmHome from '../../models/FilmHome';
import { FilmServicesService } from '../../services/film-services.service';
import Film from '../../models/Film';
import { CardFilmComponent } from '../card-film/card-film.component';
import { NgFor } from '@angular/common';
import FilmPopular from '../../models/FilmPopular';

@Component({
  selector: 'app-film-list',
  imports: [CardFilmComponent, NgFor],
  templateUrl: './film-list.component.html',
  styleUrl: './film-list.component.css',
})
export class FilmListComponent implements OnInit {
  movie: FilmHome[];
  films: FilmPopular[];

  constructor(private filmServices: FilmServicesService) {
    this.movie = [];
    this.films = [];
  }

  ngOnInit(): void {
    this.filmServices.getMovie().subscribe({
      next: (data) => {
        this.films = data.results;
        console.log(this.films);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
