import { Component, inject, OnInit } from '@angular/core';
import { FilmServicesService } from '../../services/film-services.service';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { NgFor } from '@angular/common';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-categories',
  imports: [NavbarComponent, NgFor],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent implements OnInit {
  filmServices = inject(FilmServicesService);
  movieGenres: any;
  tvGenres: any;

  ngOnInit(): void {
    this.getGenres();
  }

  getGenres(): void {
    const [movieGenres$, tvGenres$] = this.filmServices.getCategories();

    forkJoin([movieGenres$, tvGenres$]).subscribe({
      next: ([movies, tv]) => {
        this.movieGenres = movies.genres;
        this.tvGenres = tv.genres;
        console.log('Movie Genres:', this.movieGenres);
        console.log('TV Genres:', this.tvGenres);
      },
      error: (error) => {
        console.log('Error fetching genres:', error);
      },
    });
  }

  aleatoria() {
    console.log(1);
  }
  aleatoria2() {
    console.log(2);
  }
  aleatoria3() {
    console.log(3);
  }
}
