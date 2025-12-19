import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaTable } from './idea-table';

describe('IdeaTable', () => {
  let component: IdeaTable;
  let fixture: ComponentFixture<IdeaTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdeaTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdeaTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
