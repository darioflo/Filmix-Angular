import { Component, HostListener, inject, input, OnInit } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { FilmServicesService } from '../../services/film-services.service';
import FilmHome from '../../models/FilmHome';
import { CardFilmComponent } from '../../components/card-film/card-film.component';
import { NgFor } from '@angular/common';
import FilmPopular from '../../models/FilmPopular';

@Component({
  selector: 'app-films',
  imports: [NavbarComponent, CardFilmComponent, NgFor],
  templateUrl: './films.component.html',
  styleUrl: './films.component.css',
})
export class FilmsComponent implements OnInit {
  page: number = 1;
  fimlServices = inject(FilmServicesService);
  films: FilmPopular[] = [];
  film = input<FilmPopular>();
  isLoading: boolean = false;

  ngOnInit(): void {
    this.loadMovies();
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollPosition = window.innerHeight + window.scrollY;
    const scrollLimit = document.body.offsetHeight;

    if (scrollPosition > scrollLimit - 100) {
      this.page++;
      this.loadMovies();
    }
  }
  loadMovies(): void {
    this.isLoading = true;
    this.fimlServices.getMovie(this.page).subscribe({
      next: (data) => {
        this.films = [...this.films, ...data.results];
        console.log(this.films);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
