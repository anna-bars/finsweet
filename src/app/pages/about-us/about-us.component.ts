import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Author } from 'src/app/models/author';
import { JoinComponent } from 'src/app/components/join/join.component';
import { AuthorsComponent } from 'src/app/components/authors/authors.component';
import { environment } from 'src/environment/environment.prod';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [CommonModule, JoinComponent, AuthorsComponent],
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css', './about-res.css']
})
export class AboutUsComponent implements OnInit {
  constructor(private req: RequestService){}
  ngOnInit(): void {
    this.req.getData<Author[]>(environment.author.get).subscribe((res : Author[])=> {
      this.authorData = res.slice(0, 4);
      this.authorData2 = res.slice(4, 8);
    })
  }
  authorData!: Author[];
  authorData2!: Author[];
}
