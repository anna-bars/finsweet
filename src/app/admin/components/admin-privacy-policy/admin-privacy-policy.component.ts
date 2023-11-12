import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environment/environment.prod';
import { privacyPolicy } from 'src/app/models/privacy';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-admin-privacy-policy',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule,MatInputModule],
  templateUrl: './admin-privacy-policy.component.html',
  styleUrls: ['./admin-privacy-policy.component.css', '../../../pages/privacy-policy/privacy-policy.component.css']
})
export class AdminPrivacyPolicyComponent implements OnInit {
  constructor(private req: RequestService){}
  title!: string;
  mainText!: string;
  subtitle!: string;
  secondParagraph!: string;
  thirdParagraph!: string;
  showForm: boolean = false;

  privacyData: privacyPolicy = {
    mainText: '',
    secondParagraph: '',
    subtitle: '',
    thirdParagraph: '',
    title: ''
  }
  ngOnInit(){
    this.req.getData<privacyPolicy[]>(environment.privacyPolicy.get).subscribe((res)=>{
      this.title = res[0].title;
      this.mainText = res[0].mainText;
      this.subtitle = res[0].subtitle;
      this.secondParagraph = res[0].secondParagraph;
      this.thirdParagraph = res[0].thirdParagraph;
    })
  }
  edit(){
    this.showForm = true;
  }
  close(){
    this.showForm = false;
  }
  saveChanges(t: HTMLTextAreaElement, Mntext: HTMLTextAreaElement, subt: HTMLTextAreaElement,
  secp : HTMLTextAreaElement, thirdp : HTMLTextAreaElement){
    this.privacyData.mainText = Mntext.value;
    this.privacyData.secondParagraph = secp.value;
    this.privacyData.subtitle = subt.value;
    this.privacyData.thirdParagraph = thirdp.value;
    this.privacyData.title = t.value;

    this.req.putData<privacyPolicy>(environment.privacyPolicy.get + '/' + 1, this.privacyData).subscribe()
  
    location.reload()
  }

}
