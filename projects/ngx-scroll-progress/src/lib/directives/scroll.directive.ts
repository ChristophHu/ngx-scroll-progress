import { Directive, HostListener } from '@angular/core';
import { ScrollService } from '../services/scroll.service';

/**
 * This is the directive that will be used to listen to the scroll event and calculate the progress.
 */
@Directive({
  selector: '[scrollProgress]',
  standalone: true
})
export class ScrollDirective {

  scrolled: number = 0
  scrollTop   : number = 0
  scrollHeight: number = 0

  /**
   * Constructor of the scroll-directive.
   * @param _scrollService
   */
  constructor(private _scrollService: ScrollService) { }

  /**
   * The scroll event listener.
   * @param event
   */
  @HostListener('scroll', ['$event']) onScroll(event: Event) {
    console.log('event: ', event)
    this.scrollTop = (event.target as HTMLElement).scrollTop
    this.scrollHeight = (event.target as HTMLElement).scrollHeight - (event.target as HTMLElement).clientHeight
    this.scrolled = (this.scrollTop / this.scrollHeight) * 100
    this._scrollService.show(this.scrolled)
  }
}
