import { Component, input } from '@angular/core';
import Film from '../../models/Film';
import FilmPopular from '../../models/FilmPopular';

@Component({
  selector: 'app-card-film',
  imports: [],
  templateUrl: './card-film.component.html',
  styleUrl: './card-film.component.css',
})
export class CardFilmComponent {
  film = input<FilmPopular>();
}
