import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseScreen } from './showcase-screen';

describe('ShowcaseScreen', () => {
  let component: ShowcaseScreen;
  let fixture: ComponentFixture<ShowcaseScreen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowcaseScreen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowcaseScreen);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
