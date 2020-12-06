import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguagesTechComponent } from './languages-tech.component';

describe('LanguagesTechComponent', () => {
  let component: LanguagesTechComponent;
  let fixture: ComponentFixture<LanguagesTechComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguagesTechComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguagesTechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
