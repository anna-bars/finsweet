import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { environment } from 'src/environment/environment.prod';
import { RequestService } from 'src/app/services/request.service';
import { Category } from 'src/app/models/category';
import { MatIconModule } from '@angular/material/icon';
import { CategoryFormComponent } from '../category-form/category-form.component';

@Component({
  selector: 'app-admin-category',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatPaginatorModule, MatSortModule,
    MatIconModule, CategoryFormComponent ],
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.css']
})
export class AdminCategoryComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'img', 'description', 'edit', 'delete'];
  dataSource!: Category[];
  showForm: boolean = false;
  sendData!: Category;
  constructor(private req: RequestService){}
  ngOnInit(): void {
    this.req.getData<Category[]>(environment.category.get).subscribe((res : Category[])=> {
      this.dataSource = res;
    })
  }
  add(){
    this.showForm = true;
  }
  close(text:  boolean){
    this.showForm = text;
    
  }
  edit(id: number){
    this.showForm = true;
    this.req.getData<Category>(`${environment.category.get}/${id}`).subscribe((res: Category)=>{
      this.sendData = res;
    })
  }
  delete(id: number){
    this.req.deleteData(environment.category.get + '/' + id).subscribe();
    location.reload()
  }
}
