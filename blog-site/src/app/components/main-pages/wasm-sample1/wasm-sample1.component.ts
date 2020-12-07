import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wasm-sample1',
  templateUrl: './wasm-sample1.component.html',
  styleUrls: ['./wasm-sample1.component.css']
})
export class WasmSample1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    /*
    languagePluginLoader.then(function () {
      console.log(pyodide.runPython(`                  import sys                  sys.version              `));
      console.log(pyodide.runPython('print(1 + 2)'));
    });
    */
  }

}
