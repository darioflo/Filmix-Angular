import { Component, HostListener, inject, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { TvShow } from '../../models/TV-Show';
import { FilmServicesService } from '../../services/film-services.service';
import { CardFilmComponent } from '../../components/card-film/card-film.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-tv-shows',
  imports: [NavbarComponent, CardFilmComponent, NgFor],
  templateUrl: './tv-shows.component.html',
  styleUrl: './tv-shows.component.css',
})
export class TvShowsComponent implements OnInit {
  tvShows: TvShow[] = [];
  public filmServices = inject(FilmServicesService);
  page: number = 1;
  id: number = 1;

  ngOnInit(): void {
    this.getShows();
  }

  getShows() {
    this.filmServices.getTVShows(this.page + 200).subscribe({
      next: (data) => {
        this.tvShows = [...this.tvShows, ...data.results];
        console.log(this.tvShows);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollPosition = window.innerHeight + window.scrollY;
    const scrollLimit = document.body.offsetHeight;

    if (scrollPosition > scrollLimit - 100) {
      this.page++;
      this.getShows();
    }
  }
}
