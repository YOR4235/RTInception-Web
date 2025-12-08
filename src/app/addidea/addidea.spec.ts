import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Addidea } from './addidea';

describe('Addidea', () => {
  let component: Addidea;
  let fixture: ComponentFixture<Addidea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Addidea]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Addidea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
