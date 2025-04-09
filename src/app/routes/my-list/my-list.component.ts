import { Component, inject, OnInit } from '@angular/core';
import { FilmServicesService } from '../../services/film-services.service';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import FilmPopular from '../../models/FilmPopular';
import { FilmDetail } from '../../models/FilmDetail';
import { CardFilmComponent } from '../../components/card-film/card-film.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-my-list',
  imports: [NavbarComponent, CardFilmComponent, NgFor],
  templateUrl: './my-list.component.html',
  styleUrl: './my-list.component.css',
})
export class MyListComponent implements OnInit {
  listFilms: FilmDetail[] = [];
  idFilms: number[] = [];

  private filmService = inject(FilmServicesService);

  ngOnInit(): void {
    console.log(this.filmService.favorites);
    this.idFilms = [...this.filmService.favorites];
    this.getMyListFilms();
  }

  getMyListFilms() {
    this.idFilms.forEach((id) => {
      this.filmService.getFilmById(id)?.subscribe({
        next: (data) => {
          this.listFilms.push(data);
          console.log(this.listFilms);
        },
        error: (error) => {
          console.log(error);
        },
      });
    });
  }
}
