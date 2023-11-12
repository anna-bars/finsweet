import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscriber } from 'src/app/models/subscriber';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environment/environment.prod';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-admin-subscribe',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatSortModule, MatIconModule],
  templateUrl: './admin-subscribe.component.html',
  styleUrls: ['./admin-subscribe.component.css']
})
export class AdminSubscribeComponent implements OnInit {
  displayedColumns: string[] = ['mail', 'delete'];

  subscribersData!: Subscriber[];

  constructor(private req: RequestService) {}

  ngOnInit() {
    this.req.getData<Subscriber[]>(environment.subscribers.get).subscribe((res) => {
      this.subscribersData = res;
    });
  }

  delete(id: number){
    this.req.deleteData(environment.subscribers.get + '/' + id).subscribe()
    location.reload()
  } 
}
