import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WasmPythonReplComponent } from './wasm-python-repl.component';

describe('WasmPythonReplComponent', () => {
  let component: WasmPythonReplComponent;
  let fixture: ComponentFixture<WasmPythonReplComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WasmPythonReplComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WasmPythonReplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
