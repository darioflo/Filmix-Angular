import { Component, inject, OnInit } from '@angular/core';
import { FilmServicesService } from '../../services/film-services.service';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-categories',
  imports: [NavbarComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent implements OnInit {
  genres: any[] = [];
  filmServices = inject(FilmServicesService);

  ngOnInit(): void {
    this.getGenres();
  }

  getGenres(): void {
    this.filmServices.getCategories().subscribe({
      next: (data) => {
        this.genres = data.genres;
        console.log(this.genres);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
