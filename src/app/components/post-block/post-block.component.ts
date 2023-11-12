import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostBlock } from 'src/app/models/post';

@Component({
  selector: 'app-post-block',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-block.component.html',
  styleUrls: ['./post-block.component.css','../../pages/blog/blog-res.css']
})
export class PostBlockComponent {
  @Input() data!: PostBlock;
}
