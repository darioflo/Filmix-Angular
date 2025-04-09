import { Component, input } from '@angular/core';
import FilmPopular from '../../models/FilmPopular';
import { NgStyle } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { TvShow } from '../../models/TV-Show';
import { FilmServicesService } from '../../services/film-services.service';
import { FilmDetail } from '../../models/FilmDetail';

@Component({
  selector: 'app-card-film',
  imports: [NgStyle],
  templateUrl: './card-film.component.html',
  styleUrl: './card-film.component.css',
})
export class CardFilmComponent {
  film = input<FilmPopular | FilmDetail>();
  tvShow = input<TvShow>();
  added: boolean = false;

  constructor(
    private router: Router,
    public filmServices: FilmServicesService
  ) {}

  goToDetails(id: number | undefined) {
    if (id === undefined) return;

    this.router.navigate([`films-details/${id}`]);
  }

  addToFav(event: Event) {
    event.stopPropagation();
    this.added = true;
    const id = this.film()?.id;
    if (id === undefined) return;
    this.filmServices.favorites.push(id);
  }
}
