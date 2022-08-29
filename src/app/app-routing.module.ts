import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { AppComponent } from './app.component';

// Rutas de mi app
const routes: Routes = [
  { path: 'home', component: HeaderComponent },
  { path: '**', component: AppComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
