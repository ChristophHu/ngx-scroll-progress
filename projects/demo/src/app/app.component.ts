import { Component } from '@angular/core';
import { NgxScrollProgressComponent, ScrollDirective } from '../../../ngx-scroll-progress/src/public-api';

@Component({
  selector: 'app-root',
  imports: [
    NgxScrollProgressComponent,
    ScrollDirective
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  
}
