import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = '';
  date: string = '';
  amount: number = 0;
  height!: number;  //for decimal pipe - десятичный
  miles!: number;  // creating custom pipe

  car = {                     // for json pipe
    make: 'Toyota',  
    model: 'Camry',
    year: 2000,
  }

  onNameChange(value: string) {
    this.name = value
  }

  onDateChange(value: string) {
    this.date = value
  }

  onAmountChange(value: string) {
    this.amount = parseFloat(value)
  }

  onHeightChange(value: string) {
    this.height = parseFloat(value)
  }

  onMilesChange(value: string) {
    this.miles = parseFloat(value)
  }
}
