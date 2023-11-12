import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostBlock } from 'src/app/models/post';
import { PostBlockComponent } from 'src/app/components/post-block/post-block.component';
import { environment } from 'src/environment/environment.prod';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-author',
  standalone: true,
  imports: [CommonModule, PostBlockComponent],
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css', 'author-res.css']
})
export class AuthorComponent implements OnInit {
  constructor(private req: RequestService){}
  ngOnInit(): void {
    this.req.getData<PostBlock[]>(environment.authorPost.get).subscribe((res : PostBlock[])=> {
      this.postData = res;
    })
  }
  postData!: PostBlock[];
}
