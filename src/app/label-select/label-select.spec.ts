import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabelSelect } from './label-select';

describe('LabelSelect', () => {
  let component: LabelSelect;
  let fixture: ComponentFixture<LabelSelect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabelSelect]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LabelSelect);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
