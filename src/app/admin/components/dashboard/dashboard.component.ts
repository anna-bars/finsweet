import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestService } from 'src/app/services/request.service';
import { Author } from 'src/app/models/author';
import { environment } from 'src/environment/environment.prod';
import {MatIconModule} from '@angular/material/icon';
import { Category } from 'src/app/models/category';
import { PostBlock } from 'src/app/models/post';
import { Subscriber } from 'src/app/models/subscriber';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private req: RequestService){}
  authorNum!: any;
  categoryNum!: any;
  postNum!: any;
  subscriberNum!: any;
  ngOnInit() {
    this.req.getData<Author>(environment.author.get).subscribe((res)=>{
      this.authorNum = res['length']
    })
    this.req.getData<Category>(environment.category.get).subscribe((res)=>{
      this.categoryNum = res['length']
    })
    this.req.getData<PostBlock>(environment.postBlock.get).subscribe((res)=>{
      this.postNum = res['length']
    })
    this.req.getData<Subscriber>(environment.subscribers.get).subscribe((res)=>{
      this.subscriberNum = res['length']
    })
  }

}
