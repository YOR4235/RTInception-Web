import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Myideas } from './myideas';

describe('Myideas', () => {
  let component: Myideas;
  let fixture: ComponentFixture<Myideas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Myideas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Myideas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
