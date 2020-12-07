import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WasmSample1Component } from './wasm-sample1.component';

describe('WasmSample1Component', () => {
  let component: WasmSample1Component;
  let fixture: ComponentFixture<WasmSample1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WasmSample1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WasmSample1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
