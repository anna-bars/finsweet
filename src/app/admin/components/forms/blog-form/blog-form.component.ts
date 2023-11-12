import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatSelect, MatSelectModule} from '@angular/material/select';
import { RequestService } from 'src/app/services/request.service';
import { Category } from 'src/app/models/category';
import { environment } from 'src/environment/environment.prod';
import { MatIconModule } from '@angular/material/icon';
import { PostBlock } from 'src/app/models/post';


@Component({
  selector: 'app-blog-form',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatSelectModule, MatIconModule],
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.css']
})
export class BlogFormComponent implements OnInit {
  @Output() sendShow = new EventEmitter<boolean>;
  @Input() blog!: PostBlock;
  categoryName: string[] = [''];
  categoryObj!: any;
  blogData = {
      img : "",
      category: "",
      title: "",
      text: ""
  }


  constructor(private req: RequestService){}

  ngOnInit(): void {
    this.req.getData<Category>(environment.category.get).subscribe((res)=>{
      this.categoryObj = res;
      for (let i = 0; i < this.categoryObj.length; i++) {
        this.categoryName[i]  = this.categoryObj[i].title
      }
    })
  }
  close(){
    this.sendShow.emit(false)
  }
  create(title: HTMLTextAreaElement, select: MatSelect , text: HTMLTextAreaElement){
    this.blogData.title = title.value;
    this.blogData.category =  select.value;
    this.blogData.text = text.value;
    
    this.req.post(environment.postBlock.get, this.blogData).subscribe();
  }
  saveChanges(title: HTMLTextAreaElement, select: MatSelect , text: HTMLTextAreaElement){
    this.blogData.title = title.value;
    this.blogData.category =  select.value;
    this.blogData.text = text.value;

    this.req.putData(environment.postBlock.get + '/' + this.blog.id, this.blogData).subscribe() 
  }
}
