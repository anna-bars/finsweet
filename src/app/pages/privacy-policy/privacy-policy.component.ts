import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environment/environment.prod';
import { privacyPolicy } from 'src/app/models/privacy';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent implements OnInit {
  constructor(private req: RequestService){}
  title!: string;
  mainText!: string;
  subtitle!: string;
  secondParagraph!: string;
  thirdParagraph!: string;
  ngOnInit(){
    this.req.getData<privacyPolicy[]>(environment.privacyPolicy.get).subscribe((res)=>{
      this.title = res[0].title;
      this.mainText = res[0].mainText;
      this.subtitle = res[0].subtitle;
      this.secondParagraph = res[0].secondParagraph;
      this.thirdParagraph = res[0].thirdParagraph;
    })
  }

}
