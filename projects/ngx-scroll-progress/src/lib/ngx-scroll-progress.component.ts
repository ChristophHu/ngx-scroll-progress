import { Component, Input } from '@angular/core';
import { ScrollService } from '../public-api';

@Component({
  selector: 'ngx-scroll-progress',
  imports: [],
  templateUrl: './ngx-scroll-progress.component.html',
  styleUrl: './ngx-scroll-progress.component.sass'
})
export class NgxScrollProgressComponent {
  @Input() style = { background: '#fff', foreground: '#000' }
  progress: number = 0

  constructor(private _scrollService: ScrollService) {
    this._scrollService.scrolled.subscribe((progress: number) => {
      this.progress = progress
    })
  }
}
