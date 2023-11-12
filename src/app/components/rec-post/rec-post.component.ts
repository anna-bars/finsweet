import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostBlock } from 'src/app/models/post';

@Component({
  selector: 'app-rec-post',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rec-post.component.html',
  styleUrls: ['./rec-post.component.css', '../../pages/blog-post/blog-post.component.css']
})
export class RecPostComponent {
  @Input() data!: PostBlock;
}
