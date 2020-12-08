import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WasmDev1Component } from './wasm-dev1.component';

describe('WasmDev1Component', () => {
  let component: WasmDev1Component;
  let fixture: ComponentFixture<WasmDev1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WasmDev1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WasmDev1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
