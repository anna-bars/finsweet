import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { PostBlock } from 'src/app/models/post';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environment/environment.prod';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BlogFormComponent } from '../forms/blog-form/blog-form.component';

@Component({
  selector: 'app-admin-blog',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatSortModule, MatPaginatorModule,
    MatButtonModule, MatIconModule,BlogFormComponent],
  templateUrl: './admin-blog.component.html',
  styleUrls: ['./admin-blog.component.css']
})
export class AdminBlogComponent implements OnInit {
  blogData !: PostBlock[];
  displayedColumns: string[] = ['id', 'title', 'category', 'img', 'text', 'edit', 'delete'];
  blogItem!: PostBlock;

  show: boolean = false;
  constructor(private req: RequestService){}

  ngOnInit(): void {
    this.req.getData<PostBlock[]>(environment.postBlock.get).subscribe((res: PostBlock[])=>{
      this.blogData = res;
    })
  }
  add(){
    this.show = true;
  }
  changeShow(value: boolean){
    this.show = value;
    location.reload();
  }
  edit(element: PostBlock){
    this.blogItem = element;
    this.show = true;
  }
  delete(id: number){
    this.req.deleteData(environment.postBlock.get + '/' + id).subscribe();
    location.reload()
  }
}
