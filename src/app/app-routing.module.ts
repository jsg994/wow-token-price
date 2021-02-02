import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TokenPriceComponent } from './token-price/token-price.component'

const routes: Routes = [
  {path: '', component: TokenPriceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
