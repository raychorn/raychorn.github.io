import { Component } from '@angular/core';
import { CookieService } from './services/cookie.service';
import { ScriptService } from './services/scripts.service';

//import * as Module from 'src/assets/js/pyodide.js'; // raychorn.github.io/blog-site/src/assets/js/pyodide.js

//import '!!file-loader?name=wasm/pyodide.asm.wasm!src/assets/js/pyodide.asm.wasm'; // raychorn.github.io/blog-site/src/assets/js/pyodide.asm.wasm

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'raychorn.github.io';

  public now: Date = new Date();

  public module: any;

  private async instantiateWasm(url: string) {
    // fetch the wasm file
    const wasmFile = await fetch(url);

    // convert it into a binary array
    const buffer = await wasmFile.arrayBuffer();
    const binary = new Uint8Array(buffer);

    const moduleArgs = {
      wasmBinary: binary,
      onRuntimeInitialized: () => {
        // TODO
      }
    };
    // instantiate the module
    //this.module = Module(moduleArgs);
  }

  constructor(private cookieService: CookieService, private scriptService: ScriptService) {
    console.log('Loading External Scripts');
    //this.scriptService.load('pyodide');
    //this.instantiateWasm('wasm/pyodide.asm.wasm');
    //console.info('AppComponent :: this.module -> ' + this.module);
  }

  setWASMSupport(has_support: boolean): void {
    var new_date: Date = this.now;
    new_date.setDate(this.now.getDate() + 24);
    this.cookieService.set('wasm-support', String(has_support), { expires: new_date, sameSite: 'Strict' });
  }

  detectWASM(): boolean {
    const supported = (() => {
      try {
        if (typeof WebAssembly === "object"
          && typeof WebAssembly.instantiate === "function") {
          const module = new WebAssembly.Module(Uint8Array.of(0x0, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00));
          if (module instanceof WebAssembly.Module)
            return new WebAssembly.Instance(module) instanceof WebAssembly.Instance;
        }
      } catch (e) {
      }
      return false;
    })();

    return supported;
  }

  ngOnInit(): void {
    var is_supported: boolean = this.detectWASM();
    console.info('WASM is_supported -> ' + is_supported);
    this.setWASMSupport(is_supported);
  }


}
