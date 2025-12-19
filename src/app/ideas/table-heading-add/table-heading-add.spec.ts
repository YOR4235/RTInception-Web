import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableHeadingAdd } from './table-heading-add';

describe('TableHeadingAdd', () => {
  let component: TableHeadingAdd;
  let fixture: ComponentFixture<TableHeadingAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableHeadingAdd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableHeadingAdd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
