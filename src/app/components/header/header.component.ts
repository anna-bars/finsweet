import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {  RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
  imports: [ RouterModule, CommonModule]
})
export class HeaderComponent {
  menuVariable: Boolean = false;
  showMenuIcon: Boolean = true;
  showMenu(tag: HTMLElement, first_span: HTMLElement, third_span: HTMLElement){
    this.menuVariable =! this.menuVariable;
    this.showMenuIcon =! this.showMenuIcon;
    if(this.menuVariable == true){
      tag.classList.add('menuClass');
      first_span.classList.add('spanRotate1');
      third_span.classList.add('spanRotate2');
    } else {
      tag.classList.remove('menuClass');
      first_span.classList.remove('spanRotate1');
      third_span.classList.remove('spanRotate2');
    }
  }

}
