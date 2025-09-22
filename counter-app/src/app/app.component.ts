import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyCounterComponent } from "./my-counter/my-counter.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MyCounterComponent, MyCounterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'counter-app';
}
