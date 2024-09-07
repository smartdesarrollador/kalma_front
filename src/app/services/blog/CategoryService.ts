import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Category } from '../../models/Category.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private categoriesUrl = environment.categoriesUrl;

  constructor(private http: HttpClient) {}

  // Obtener todas las categorías
  getCategories(): Observable<Category[]> {
    return this.http.get<{ data: Category[] }>(this.categoriesUrl).pipe(
      map((response) => response.data) // Asumiendo que el API devuelve un objeto con la clave 'data'
    );
  }
}
