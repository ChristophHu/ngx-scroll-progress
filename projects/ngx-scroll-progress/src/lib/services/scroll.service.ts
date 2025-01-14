import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ScrollService {

  private _scrolled: BehaviorSubject<number> = new BehaviorSubject<number>(0)
  public scrolled: Observable<number> = this._scrolled.asObservable()

  constructor() {}

  show(progress: number) {
    this._scrolled.next(progress)
  }
}