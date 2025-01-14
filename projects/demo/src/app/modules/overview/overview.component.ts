import { Component } from '@angular/core';
import { NgxScrollProgressComponent, ScrollDirective } from '../../../../../ngx-scroll-progress/src/public-api';

@Component({
  selector: 'app-overview',
  imports: [
    NgxScrollProgressComponent,
    ScrollDirective
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.sass'
})
export class OverviewComponent {
  
}
