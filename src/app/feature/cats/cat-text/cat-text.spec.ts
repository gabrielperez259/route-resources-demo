import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatText } from './cat-text';

describe('CatText', () => {
  let component: CatText;
  let fixture: ComponentFixture<CatText>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatText],
    }).compileComponents();

    fixture = TestBed.createComponent(CatText);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
