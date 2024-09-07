import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostService } from '../../../../services/blog/PostService';
import { Post } from '../../../../models/Post.model';
import { CommentFormComponent } from '../comment-form/comment-form.component';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule, CommentFormComponent],
  templateUrl: './post-detail.component.html',
  styleUrl: './post-detail.component.css',
})
export class PostDetailComponent implements OnInit {
  post: Post | undefined;
  postId: number;

  constructor(private route: ActivatedRoute, private postService: PostService) {
    // Obtener el ID del post desde la URL
    this.postId = +this.route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    // Llamar al servicio para obtener el detalle del post
    this.postService.getPost(this.postId).subscribe((data) => {
      this.post = data;
    });
  }
}
