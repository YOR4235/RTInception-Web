import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaListParent } from './idea-list-parent';

describe('IdeaListParent', () => {
  let component: IdeaListParent;
  let fixture: ComponentFixture<IdeaListParent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdeaListParent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdeaListParent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
