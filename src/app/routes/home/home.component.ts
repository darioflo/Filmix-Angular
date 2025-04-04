import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeroImageComponent } from '../../components/hero-image/hero-image.component';
import { FilmListComponent } from '../../components/film-list/film-list.component';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, HeroImageComponent, FilmListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
