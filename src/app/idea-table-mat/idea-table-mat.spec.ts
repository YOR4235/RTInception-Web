import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaTableMat } from './idea-table-mat';

describe('IdeaTableMat', () => {
  let component: IdeaTableMat;
  let fixture: ComponentFixture<IdeaTableMat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdeaTableMat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdeaTableMat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
