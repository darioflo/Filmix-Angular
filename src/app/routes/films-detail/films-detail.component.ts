import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FilmServicesService } from '../../services/film-services.service';
import { ActivatedRoute } from '@angular/router';
import { FilmDetail } from '../../models/FilmDetail';
import { NgFor } from '@angular/common';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-films-detail',
  imports: [NgFor, NavbarComponent],
  templateUrl: './films-detail.component.html',
  styleUrl: './films-detail.component.css',
})
export class FilmsDetailComponent implements OnInit {
  film: FilmDetail;
  id: number | null;

  constructor(
    public filmServices: FilmServicesService,
    private route: ActivatedRoute
  ) {
    this.id = null;
    this.film = {
      adult: false,
      backdrop_path: '',
      belongs_to_collection: null,
      budget: 0,
      genres: [],
      homepage: '',
      id: 0,
      imdb_id: '',
      original_language: '',
      original_title: '',
      overview: '',
      popularity: 0,
      poster_path: '',
      production_companies: [],
      production_countries: [],
      release_date: '',
      revenue: 0,
      runtime: 0,
      spoken_languages: [],
      status: '',
      tagline: '',
      title: '',
      video: false,
      vote_average: 0,
      vote_count: 0,
      origin_country: [],
    };
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(this.id);

    this.filmServices.getFilmById(this.id)?.subscribe({
      next: (data) => {
        this.film = data;
        console.log(this.film);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
