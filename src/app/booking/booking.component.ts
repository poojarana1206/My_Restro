import { Component } from '@angular/core';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {
public Booking : string = ' ';

  onsubmit(){
     this.Booking = "your booking is done";
    
  }

}
