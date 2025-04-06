import { Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { FilmListComponent } from './components/film-list/film-list.component';
import { SeriesComponent } from './routes/series/series.component';
import { MyListComponent } from './routes/my-list/my-list.component';
import { CategoriesComponent } from './routes/categories/categories.component';
import { FilmsComponent } from './routes/films/films.component';
import { FilmsDetailComponent } from './routes/films-detail/films-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'films', component: FilmsComponent },
  { path: 'series', component: SeriesComponent },
  { path: 'my-list', component: MyListComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'films-details/:id', component: FilmsDetailComponent },
];
