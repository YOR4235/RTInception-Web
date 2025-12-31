import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderGc } from './header-gc';

describe('HeaderGc', () => {
  let component: HeaderGc;
  let fixture: ComponentFixture<HeaderGc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderGc]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderGc);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
