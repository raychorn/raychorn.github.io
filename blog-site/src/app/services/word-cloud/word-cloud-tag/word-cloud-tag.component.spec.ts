import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordCloudTagComponent } from './word-cloud-tag.component';

describe('WordCloudTagComponent', () => {
  let component: WordCloudTagComponent;
  let fixture: ComponentFixture<WordCloudTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordCloudTagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordCloudTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
