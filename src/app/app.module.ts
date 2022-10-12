import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgCircleProgressModule } from 'ng-circle-progress-day-countdown';


import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, FormsModule,
     NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    })],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
