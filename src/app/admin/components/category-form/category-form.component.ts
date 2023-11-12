import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatSelect, MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';


import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormBuilder, FormGroup, FormsModule, Validators} from '@angular/forms';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environment/environment.prod';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-category-form',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatFormFieldModule, FormsModule,
    MatIconModule, MatSelectModule, ReactiveFormsModule ],
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.css']
})
export class CategoryFormComponent implements OnInit {
  @Input() data!: Category;
  @Output() sendShow = new EventEmitter<boolean>
  imgSrc: string = this.data?.img;

  categoryData: Category = {
    img: '', 
    title: '',
    description: '',
  }
  constructor(private req: RequestService,
    public fb: FormBuilder){}

    form: FormGroup = this.fb.group({
      name: ['', Validators.required],
      select: ['Business', Validators.required],
      desc: ['', [Validators.minLength(15), Validators.maxLength(175), Validators.required]],
    });

  ngOnInit(): void {
    
  }
  changeValue(s: MatSelect){
    if (s.value == 'Business'){
      this.imgSrc = 'assets/img/category/business-01.png'
    } else if (s.value == 'Startup'){
      this.imgSrc = 'assets/img/category/startup-02.png'
    } else if (s.value == 'Economy'){
      this.imgSrc = 'assets/img/category/economy-03.png'
    } else if (s.value == 'Technology'){
      this.imgSrc = 'assets/img/category/technology-04.png'
    }
  }
  create(name : HTMLInputElement, description: HTMLTextAreaElement){
    this.categoryData.img = this.imgSrc;
    this.categoryData.title = name.value;
    this.categoryData.description = description.value;

    
    this.req.postCategoryData(environment.category.get, this.categoryData).subscribe();
    this.sendShow.emit(false);
    location.reload()
  }
  saveChanges(name : HTMLInputElement, description: HTMLTextAreaElement){
    this.categoryData.img = this.imgSrc;
    this.categoryData.title = name.value;
    this.categoryData.description = description.value;
    
    this.req.putData<Category>((environment.category.get)+ '/' + (this.data.id), this.categoryData).subscribe();
    this.sendShow.emit(false);
    location.reload()
  }

  close(){
    this.sendShow.emit(false)
  }
}

