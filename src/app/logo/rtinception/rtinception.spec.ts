import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rtinception } from './rtinception';

describe('Rtinception', () => {
  let component: Rtinception;
  let fixture: ComponentFixture<Rtinception>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rtinception]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rtinception);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
