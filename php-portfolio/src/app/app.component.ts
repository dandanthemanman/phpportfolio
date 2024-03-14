import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass',
})
export class AppComponent implements OnInit {
  // I guess this is how you declare a var in TS VV
  title: string | undefined;
  ngOnInit() {
    this.title = 'tester title'
    console.log(this.title);
  }
}
