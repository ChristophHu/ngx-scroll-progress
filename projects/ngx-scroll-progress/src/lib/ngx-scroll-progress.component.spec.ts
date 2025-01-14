import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxScrollProgressComponent } from './ngx-scroll-progress.component';

describe('NgxScrollProgressComponent', () => {
  let component: NgxScrollProgressComponent;
  let fixture: ComponentFixture<NgxScrollProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxScrollProgressComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxScrollProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
