import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseOverlay } from './showcase-overlay';

describe('ShowcaseOverlay', () => {
  let component: ShowcaseOverlay;
  let fixture: ComponentFixture<ShowcaseOverlay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowcaseOverlay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowcaseOverlay);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
