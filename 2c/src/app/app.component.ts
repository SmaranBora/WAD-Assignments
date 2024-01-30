import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  getValues(arg0: any){
    throw new Error('Method not implemented');
  }
  title = '2c';
  simpleForm: any;
}
