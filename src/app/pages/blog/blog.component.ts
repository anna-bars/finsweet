import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostBlock } from 'src/app/models/post';
import { Category } from 'src/app/models/category';
import { PostBlockComponent } from 'src/app/components/post-block/post-block.component';
import { CategoriesComponent } from 'src/app/components/categories/categories.component';
import { JoinComponent } from 'src/app/components/join/join.component';
import { environment } from 'src/environment/environment.prod';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, PostBlockComponent, CategoriesComponent, JoinComponent],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css', './blog-res.css']
})
export class BlogComponent implements OnInit{
  

  constructor(private req: RequestService){}
  ngOnInit(): void {
    this.req.getData<Category[]>(environment.category.get).subscribe((res : Category[])=> {
      this.categoryData = res;
    })
    this.req.getData<PostBlock[]>(environment.postBlock.get).subscribe((res : PostBlock[])=> {
      this.postData = res;
    })
  }
  categoryData!: Category[];
  postData!: PostBlock[];
}
