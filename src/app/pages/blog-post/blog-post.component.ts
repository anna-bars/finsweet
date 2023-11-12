import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostBlock } from 'src/app/models/post';
import { RecPostComponent } from 'src/app/components/rec-post/rec-post.component';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environment/environment';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [CommonModule, RecPostComponent],
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css','./blog-post-res.css']
})
export class BlogPostComponent implements OnInit{
  postsData!: PostBlock[];
  constructor(private req:  RequestService){}

  ngOnInit(): void {
    this.req.getData<PostBlock[]>(environment.postData.get).subscribe((res) => {
      this.postsData = res;
    })
  }
}
