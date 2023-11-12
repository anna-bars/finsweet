import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Author } from 'src/app/models/author';

@Component({
  selector: 'app-authors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
}) 
export class AuthorsComponent {
  @Input() elem!: Author;
}
