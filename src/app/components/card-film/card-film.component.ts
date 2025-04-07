import { Component, input } from '@angular/core';
import Film from '../../models/Film';
import FilmPopular from '../../models/FilmPopular';
import { NgStyle } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { TvShow } from '../../models/TV-Show';

@Component({
  selector: 'app-card-film',
  imports: [NgStyle],
  templateUrl: './card-film.component.html',
  styleUrl: './card-film.component.css',
})
export class CardFilmComponent {
  film = input<FilmPopular>();
  tvShow = input<TvShow>();

  constructor(private router: Router) {}

  goToDetails(id: number | undefined) {
    if (id === undefined) return;

    this.router.navigate([`films-details/${id}`]);
  }
}
