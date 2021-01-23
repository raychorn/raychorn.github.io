import { Component, OnInit } from '@angular/core';
import { WordCloudService } from 'src/app/services/word-cloud/word-cloud.service';

import *  as publications from 'src/assets/data/publications.json';

export interface Publication {
  id: number,
  name: string,
  description: string,
  url: string;
}

@Component({
  selector: 'app-publications-list',
  templateUrl: './publications-list.component.html',
  styleUrls: ['./publications-list.component.css']
})
export class PublicationsListComponent implements OnInit {

  public pubs: any = [];

  constructor(private wordCloud: WordCloudService) { }

  __pubs: Array<Publication> = (publications as any).default;

  ngOnInit(): void {
    //console.log('*** publications -> ' + JSON.stringify(publications));
    for (var i in this.__pubs) {
      console.log('*** -> ' + JSON.stringify(this.__pubs[i]));
      console.log('### desc -> ' + this.__pubs[i].description);
      this.wordCloud.addWords(this.__pubs[i].description, this.__pubs[i].url);
    }
    this.wordCloud.debugWords();
    this.pubs = this.wordCloud.getPubs();
  }

}
