import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText = faker.lorem.sentence(3);
  enteredText = ''

  onChange(value: string) {
    this.enteredText = value
  } 

  compare(randomLetter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return 'pending'
    }

    return enteredLetter === randomLetter ? 'correct' : 'incorrect'    
  }
}
