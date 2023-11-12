import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from 'src/app/models/category';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css',  '../../pages/home/home-res.css']
})
export class CategoriesComponent {
  @Input() data !: Category;
}
