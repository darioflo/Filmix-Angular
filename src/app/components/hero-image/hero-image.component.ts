import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import FilmHome from '../../models/FilmHome';
import { NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-hero-image',
  imports: [HttpClientModule, NgIf, NgStyle],
  templateUrl: './hero-image.component.html',
  styleUrl: './hero-image.component.css',
})
export class HeroImageComponent implements OnInit {
  movie: FilmHome;

  filmsAndSeries: FilmHome[] = [
    {
      name: 'Pirates of Caribbean',
      genre: 'Action, Adventure, Fantasy',
      description:
        'Captain Barbossa, Will Turner, and Elizabeth Swann must sail off the edge of the map to rescue Jack Sparrow and form an alliance to fight the East India Company.',
      thumb: ['Piratas-del-Caribe.mp4', 'Piratas-del-Caribe-2.jpg'], // Reemplaza con un enlace real si lo tienes
      duration: 169,
      languague: 'English',
      actors: ['Johnny Depp', 'Orlando Bloom', 'Keira Knightley'],
    },
    {
      name: 'Fast & Furious 4',
      genre: 'Action, Crime, Thriller',
      description:
        "Brian O'Conner teams up with Dominic Toretto to bring down a heroin importer by infiltrating his operation.",
      thumb: ['FandF4.mp4', 'Fast.jpg'], // Reemplaza con un enlace real si lo tienes
      duration: 107,
      languague: 'English',
      actors: ['Vin Diesel', 'Paul Walker', 'Michelle Rodriguez'],
    },
    {
      name: 'Venom',
      genre: 'Action, Sci-Fi, Thriller',
      description:
        'A failed reporter is bonded to an alien entity, one of many symbiotes who have invaded Earth. However, the being takes a liking to Earth and decides to protect it.',
      thumb: ['VENOM.mp4', 'Venom.jpg'], // Reemplaza con un enlace real si lo tienes
      duration: 112,
      languague: 'English',
      actors: ['Tom Hardy', 'Michelle Williams', 'Riz Ahmed'],
    },
    {
      name: 'Peaky Blinders',
      genre: 'Crime, Drama',
      description:
        'A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their ambitious boss Tommy Shelby.',
      thumb: ['Peaky-Blinders-2.mp4', 'Peaky-Blinders.jpg'], // Reemplaza con un enlace real si lo tienes
      duration: 60, // Duración promedio de un episodio
      languague: 'English',
      actors: ['Cillian Murphy', 'Helen McCrory', 'Paul Anderson'],
    },
    {
      name: 'Game of Thrones',
      genre: 'Action, Adventure, Drama',
      description:
        'Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.',
      thumb: ['Game-of-Thrones-2.mp4', 'Game-of-Thrones.jpg'], // Reemplaza con un enlace real si lo tienes
      duration: 57, // Duración promedio de un episodio
      languague: 'English',
      actors: ['Emilia Clarke', 'Kit Harington', 'Peter Dinklage'],
    },
  ];

  readonly url =
    'https://api.themoviedb.org/3/person/popular?language=en-US&page=1';

  constructor(private http: HttpClient) {
    this.movie = {
      name: '',
      genre: '',
      description: '',
      thumb: ['', ''],
      duration: 0,
      languague: '',
      actors: ['', '', ''],
    };
  }

  ngOnInit(): void {
    this.selectMovieHome();
  }

  selectMovieHome() {
    let filmPosition = Math.floor(Math.random() * this.filmsAndSeries.length);
    this.movie = this.filmsAndSeries[filmPosition];
    console.log(this.movie);
  }
}
