import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Subscriber } from 'src/app/models/subscriber';
import { RequestService } from 'src/app/services/request.service';
import { environment } from 'src/environment/environment.prod';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  standalone: true,
  imports: [RouterModule]
})
export class FooterComponent {
  subscriber: Subscriber = {
    mail: ''
  };
  constructor(private req: RequestService){}

  subscribe(value: string){
    this.subscriber.mail = value;
    this.req.post<Subscriber>(environment.subscribers.get, this.subscriber).subscribe();
    location.reload();
  }
}
