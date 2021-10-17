import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaatersComponent } from './plaaters.component';

describe('PlaatersComponent', () => {
  let component: PlaatersComponent;
  let fixture: ComponentFixture<PlaatersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaatersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaatersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
