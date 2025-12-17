import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdeaTabs } from './idea-tabs';

describe('IdeaTabs', () => {
  let component: IdeaTabs;
  let fixture: ComponentFixture<IdeaTabs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdeaTabs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdeaTabs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
