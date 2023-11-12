import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Category } from 'src/app/models/category';
import { Author } from 'src/app/models/author';
import { CategoriesComponent } from 'src/app/components/categories/categories.component';
import { AuthorsComponent } from 'src/app/components/authors/authors.component';
import { JoinComponent } from 'src/app/components/join/join.component';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environment/environment.prod';

interface Review {
  id?: number,
  text: string,
  authorImg: string,
  authorName: string,
  Location: string
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, CategoriesComponent, AuthorsComponent, JoinComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', './home-res.css']
})
export class HomeComponent implements OnInit {
  categoryData!: Category[];
  authorData!: Author[];
  companyImg: Array<string> = [
    '../../../assets/img/home/logo1.png',
    '../../../assets/img/home/logo2.png',
    '../../../assets/img/home/logo3.png',
    '../../../assets/img/home/logo4.png',
    '../../../assets/img/home/logo5.png'
  ];
  reviewData: Review = {
    text: '',
    authorImg: '',
    authorName: '',
    Location: ''
  }
  reviewArray!: Review[];
  item: number = 3;

  constructor (private req: RequestService){}

  ngOnInit(): void {
    this.req.getData<Author[]>(environment.author.get).subscribe((res : Author[])=> {
      this.authorData = res.slice(0, 4);
      
    })
    this.req.getData<Category[]>(environment.category.get).subscribe((data: Category[])=> {
      this.categoryData = data;
      
    })
    this.getReview(--this.item);
  }
  getReview(i: number){
    
    this.req.getData<Review[]>(environment.review.get).subscribe((res)=>{
      this.reviewArray = res
      this.reviewData = this.reviewArray[i]       
    })
  }
  back(){
    --this.item;
    if(this.item < 0){
      ++this.item;
      return
    }
    this.getReview(this.item);
  }
  next(){
    ++this.item;
    if(this.item > --this.reviewArray.length){
      --this.item;
      return
    }
    this.getReview(this.item); 
  }
}

