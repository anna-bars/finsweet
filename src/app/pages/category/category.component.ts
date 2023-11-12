import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostBlock } from 'src/app/models/post';
import { PostBlockComponent } from 'src/app/components/post-block/post-block.component';
import { environment } from 'src/environment/environment.prod';
import { RequestService } from 'src/app/services/request.service';
import { Category } from 'src/app/models/category';


@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, PostBlockComponent],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css', './category-res.css']
})
export class CategoryComponent implements OnInit {
  constructor(private req: RequestService){}
  ngOnInit(): void {
    this.req.getData<PostBlock[]>(environment.postBlockBusiness.get).subscribe((res : PostBlock[])=> {
      this.postData = res;
    })
    this.req.getData<Category[]>(environment.category.get).subscribe((res : Category[])=> {
      this.category = res;
    })
  }
  postData!: PostBlock[];
  category!: Category[];
}
