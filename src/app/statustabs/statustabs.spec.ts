import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Statustabs } from './statustabs';

describe('Statustabs', () => {
  let component: Statustabs;
  let fixture: ComponentFixture<Statustabs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Statustabs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Statustabs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
