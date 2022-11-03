import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      imageUrl: 'assets/tree.jpeg',
      username: 'nature',
      content: 'Saw this awesome tree duriong my hike today'
    },
    {
      title: 'Snowy Mountain',
      imageUrl: 'assets/mountain.jpeg',
      username: 'mountainlover',
      content: 'Here is a picture of snowy mountain'
    },
    {
      title: 'Mountain Biking',
      imageUrl: 'assets/biking.jpeg',
      username: 'biking1222',
      content: 'I did some biking today'
    },  
        {
      title: 'Neat Tree',
      imageUrl: 'assets/tree.jpeg',
      username: 'nature',
      content: 'Saw this awesome tree duriong my hike today'
    }
  ]
}
