import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatTags } from './cat-tags';

describe('CatTags', () => {
  let component: CatTags;
  let fixture: ComponentFixture<CatTags>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CatTags],
    }).compileComponents();

    fixture = TestBed.createComponent(CatTags);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
