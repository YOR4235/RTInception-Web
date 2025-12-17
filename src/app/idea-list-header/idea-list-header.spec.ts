import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaListHeader } from './idea-list-header';

describe('IdeaListHeader', () => {
  let component: IdeaListHeader;
  let fixture: ComponentFixture<IdeaListHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdeaListHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdeaListHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
