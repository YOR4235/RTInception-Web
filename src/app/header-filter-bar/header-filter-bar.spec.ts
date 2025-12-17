import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderFilterBar } from './header-filter-bar';

describe('HeaderFilterBar', () => {
  let component: HeaderFilterBar;
  let fixture: ComponentFixture<HeaderFilterBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderFilterBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderFilterBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
