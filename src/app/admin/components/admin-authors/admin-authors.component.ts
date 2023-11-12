import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import {  MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { environment } from 'src/environment/environment.prod';
import { RequestService } from 'src/app/services/request.service';
import { Author } from 'src/app/models/author';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AuthorFormComponent } from '../forms/author-form/author-form.component';


@Component({
  selector: 'app-admin-authors',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule,MatSortModule,
    MatButtonModule, MatIconModule, AuthorFormComponent ],
  templateUrl: './admin-authors.component.html',
  styleUrls: ['./admin-authors.component.css']
})
export class AdminAuthorsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'image', 'profession', 'edit', 'delete'];
  authorData !: Author[];
 
  show: boolean = false;
  authorDat!: Author;

  constructor(private req:RequestService){}
  
  ngOnInit() {
    this.req.getData<Author[]>(environment.author.get).subscribe((res: Author[])=>{
      this.authorData = res;
    })
  }
  add(){
    this.show = true;
  }

  close(val : boolean){
    this.show = val;
  }

  edit(author: Author){
    this.authorDat = author;
    this.show = true;
  }
  delete(id: number){
    this.req.deleteData(environment.author.get + '/' + id).subscribe(()=>{});
    location.reload()
  }
}
