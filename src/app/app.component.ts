import { Component, OnInit } from '@angular/core';
import { BnetService } from './bnet.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

constructor(private bnet: BnetService){}

ngOnInit(): void {
  this.bnet.authorizeApp();
  this.bnet.callTokenPrice();
}


  
  title = 'token-price';
}
