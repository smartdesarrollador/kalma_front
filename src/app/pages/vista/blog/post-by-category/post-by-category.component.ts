import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostService } from '../../../../services/blog/PostService';
import { Post } from '../../../../models/Post.model';
import { environment } from '../../../../../environments/environment';
import { Category } from '../../../../models/Category.model';
import { CategoryService } from '../../../../services/blog/CategoryService';

@Component({
  selector: 'app-post-by-category',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './post-by-category.component.html',
  styleUrl: './post-by-category.component.css',
})
export class PostByCategoryComponent implements OnInit {
  urlRaiz = environment.urlRaiz + '/';
  posts: Post[] = [];
  categoryId: number;
  categoryName: string | undefined; // Variable para almacenar el nombre de la categoría

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private categoryService: CategoryService,
    private router: Router
  ) {
    // Obtener el ID de la categoría desde la URL
    this.categoryId = +this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    // Llamar al servicio para obtener los posts de la categoría
    this.postService.getPostsByCategory(this.categoryId).subscribe((data) => {
      this.posts = data;
    });

    // Llamar al servicio para obtener el nombre de la categoría
    this.getCategoryName(this.categoryId);
  }

  getCategoryName(id: number): void {
    this.categoryService.getCategoryById(id).subscribe((category: Category) => {
      this.categoryName = category.nombre; // Asumimos que el nombre de la categoría se almacena en 'nombre'
    });
  }

  // Redirigir al detalle del post
  goToPostDetail(id: number): void {
    this.router.navigate(['/blog/posts/detail/', id]);
  }
}
