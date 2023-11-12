import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { Author } from 'src/app/models/author';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environment/environment.prod';

@Component({
  selector: 'app-author-form',
  standalone: true,
  imports: [CommonModule, MatInputModule, MatIconModule],
  templateUrl: './author-form.component.html',
  styleUrls: ['./author-form.component.css']
})
export class AuthorFormComponent implements OnInit {
  @Output() sendShow = new EventEmitter<boolean>;
  @Input() data !: Author;

  imgSrc!: string;

  
  close(){
    this.sendShow.emit(false)
  }
  authorData: Author = {
    img: '',
    name: '',
    profession: ''
  };
  constructor(private req: RequestService){}
  ngOnInit() {
    if (this.data){
      this.imgSrc = this.data.img
    }
  }
  create(name: HTMLInputElement, prof: HTMLInputElement){
    this.authorData.img = '';
    this.authorData.name = name.value;
    this.authorData.profession = prof.value;
    
    this.req.post<Author>(environment.author.get, this.authorData).subscribe()
  }
  saveChanges(name: HTMLInputElement, prof: HTMLInputElement){
    this.authorData.img = this.data.img;
    this.authorData.name = name.value;
    this.authorData.profession = prof.value;

    this.req.putData(environment.author.get + '/' + this.data.id, this.authorData).subscribe()
  }
}
