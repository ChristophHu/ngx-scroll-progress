import { Component, DebugElement } from '@angular/core'
import { ScrollDirective } from './scroll.directive'
import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { ScrollService } from '../services/scroll.service'

@Component({
  selector: 'test-component',
  template: ` 
    <div class="scroll-container" scrollProgress>
      <div class="content"></div>
      <div class="content"></div>
      <div class="content"></div>
      <div class="content"></div>
      <div class="content"></div>
    </div>
  `,
  styles: `
    .scroll-container {
      position: relative;
      height: 600px;
      width: 100%;
      overflow: auto;
    }
    .content {
      height: 200px;
      width: 100%;
    }
  `  
})
export class TestComponent {}

describe('ScrollDirective', () => {
  let fixture: ComponentFixture<TestComponent>
  let debugElement: DebugElement
  let component: TestComponent
  let scrollService: ScrollService
  let directive: ScrollDirective

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        TestComponent
      ],
      imports: [
        ScrollDirective
      ],
      providers: [
        ScrollService,
        ScrollDirective
      ]
    }).compileComponents()

    fixture = TestBed.createComponent(TestComponent)
    fixture.detectChanges()
    component = fixture.componentInstance

    debugElement = fixture.debugElement.query(By.css('.scroll-container'))
    directive = new ScrollDirective(scrollService)
  })

  it('should create TestComponent', () => {
    expect(component).toBeTruthy()
  })

  it('should create an instance of the directive', () => {
    const directive = new ScrollDirective(scrollService)
    expect(directive).toBeTruthy()
  })

  it('should found the directive in the TestComponent', () => {
    const elems = fixture.debugElement.queryAll(By.directive(ScrollDirective))
    expect(elems.length).toBe(1)
  })

  it('should have default values', () => {
    expect(directive.scrollTop).toBe(0)
    expect(directive.scrollHeight).toBe(0)
    expect(directive.scrolled).toBe(0)
  })

  it('should scroll debugElement correctly', fakeAsync(() => {
    debugElement.nativeElement.scrollTop = 200
    fixture.whenStable().then(() => {
      expect(debugElement.nativeElement.scrollTop).toBe(200)
    })
  }))

  it('should listen to the scroll event', () => {
    const directive = debugElement.injector.get(ScrollDirective)
    const spy = spyOn(directive, 'onScroll')
    debugElement.triggerEventHandler('scroll', {})
    expect(spy).toHaveBeenCalledTimes(1)
  })
})
