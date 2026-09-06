import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseDescription } from './showcase-description';

describe('ShowcaseDescription', () => {
  let component: ShowcaseDescription;
  let fixture: ComponentFixture<ShowcaseDescription>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowcaseDescription]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowcaseDescription);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
