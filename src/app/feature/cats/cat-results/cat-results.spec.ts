import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatResults } from './cat-results';

describe('CatResults', () => {
  let component: CatResults;
  let fixture: ComponentFixture<CatResults>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatResults],
    }).compileComponents();

    fixture = TestBed.createComponent(CatResults);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
