import { Component, OnInit } from '@angular/core';
import { BnetService } from '../bnet.service';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import * as moment from 'moment';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';



@Component({
  selector: 'app-token-price',
  templateUrl: './token-price.component.html',
  styleUrls: ['./token-price.component.css']
})
export class TokenPriceComponent implements OnInit {

  constructor(private bnet: BnetService) { }
  price: any;
  lastUpdated: any;
  momentObj: any;
  momentString: any;
  gold: any;
  silver: any;
  copper: any;
  setCall: any;
  loading: any;
  showCard: any;


  ngOnInit(): void {
    this.showCard = false;
    // this.callTokenPriceClick();
    this.setCall = setTimeout(() => {
      this.callFirstToken();
    }, 100)
  }

  callFirstToken() {
    this.loading = true;
    setTimeout(() => {
      this.callTokenPriceClick()
    }, 1000)
  }

  callTokenPriceClick() {
    this.loading = false;
    this.bnet.callTokenPrice().subscribe(res => {
      this.price = res['price'];
      this.price = this.price.toString();
      this.gold = this.price.substring(0, this.price.length - 4);
      console.log(this.gold)
      this.silver = this.price.substring(this.price.length - 4, this.price.length -2);
      this.copper = this.price.substring(this.price.length - 2, this.price.length);
      this.lastUpdated = res['last_updated_timestamp']
      this.lastUpdated = new Date(this.lastUpdated)
      this.momentObj = moment(this.lastUpdated)
      this.momentString = this.momentObj.format("dddd, MMMM Do YYYY, h:mm:ss a")
      this.addComma(this.gold);
      this.showCard = true;
    })
    
  }

  addComma(num) {
    this.gold = num;
    console.log(this.gold)
    this.gold = this.gold.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  ngOnDestroy() {
    this.price.unsubscribe();
    this.lastUpdated.unsubscribe();
  }

  

}
