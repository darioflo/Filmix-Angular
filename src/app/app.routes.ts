import { Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { FilmListComponent } from './components/film-list/film-list.component';
import { MyListComponent } from './routes/my-list/my-list.component';
import { CategoriesComponent } from './routes/categories/categories.component';
import { FilmsComponent } from './routes/films/films.component';
import { FilmsDetailComponent } from './routes/films-detail/films-detail.component';
import { TvShowsComponent } from './routes/tv-shows/tv-shows.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'films', component: FilmsComponent },
  { path: 'tv-shows', component: TvShowsComponent },
  { path: 'my-list', component: MyListComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'films-details/:id', component: FilmsDetailComponent },
];
