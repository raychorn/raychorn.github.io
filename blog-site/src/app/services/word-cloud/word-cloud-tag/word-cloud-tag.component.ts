import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-word-cloud-tag',
  templateUrl: './word-cloud-tag.component.html',
  styleUrls: ['./word-cloud-tag.component.css']
})
export class WordCloudTagComponent implements OnInit {

  @Input() word: string;
  @Input() count: number;
  @Input() url: string;

  constructor() { }

  ngOnInit(): void {
    console.log('*** WordCloudTagComponent word -> ' + this.word + ', count -> ' + this.count + ', url -> ' + this.url);
  }

}
