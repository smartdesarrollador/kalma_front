import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostService } from '../../../../services/blog/PostService';
import { Post } from '../../../../models/Post.model';

@Component({
  selector: 'app-post-by-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-by-category.component.html',
  styleUrl: './post-by-category.component.css',
})
export class PostByCategoryComponent implements OnInit {
  posts: Post[] = [];
  categoryId: number;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
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
  }

  // Redirigir al detalle del post
  goToPostDetail(id: number): void {
    this.router.navigate(['/blog/posts/detail/', id]);
  }
}
