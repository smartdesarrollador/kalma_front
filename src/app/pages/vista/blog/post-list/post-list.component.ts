import { Component, OnInit } from '@angular/core';
import { PostService } from '../../../../services/blog/PostService';
import { Post } from '../../../../models/Post.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
})
export class PostListComponent implements OnInit {
  urlRaiz = environment.urlRaiz + '/';
  posts: Post[] = [];

  constructor(private postService: PostService, private router: Router) {}

  ngOnInit(): void {
    // Obtener los posts desde el servicio
    this.postService.getPosts().subscribe((data) => {
      this.posts = data;
    });
  }

  // Redirigir al detalle del post
  goToPostDetail(id: number): void {
    this.router.navigate(['/blog/posts/detail/', id]);
  }
}
