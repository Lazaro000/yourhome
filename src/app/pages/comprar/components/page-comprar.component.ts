import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { tap } from 'rxjs';

@Component({
  selector: 'app-page-comprar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-comprar.component.html',
  styleUrl: './page-comprar.component.css',
})
export class PageComprarComponent {
  private readonly http = inject(HttpClient);

  todos$ = this.http
    .get<{ userId: string; title: string }[]>(
      'https://jsonplaceholder.typicode.com/todos'
    )
    .pipe(
      tap((res) => {
        console.log('Cargado desde el template, Todos los TODOS ', res);
      })
    );

  constructor() {
    this.http
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .subscribe((res) => {
        console.log('Cargado desde el constructor, todo 1 => ', res);
      });
  }

  getTodo() {
    this.http
      .get('https://jsonplaceholder.typicode.com/todos/1')
      .subscribe((res) => {
        console.log('Cargado desde el boton, todo 1 => ', res);
      });
  }
}
