import { Injectable } from '@angular/core';

export interface Publication {
  desc: string,
  url: string;
  count: number;
}

@Injectable({
  providedIn: 'root'
})
export class WordCloudService {

  private words: any = {};

  constructor() {
    this.resetWords();
  }

  public resetWords() {
    this.words = {};
  }

  public debugWords() {
    var pub: Publication;
    var total: number = 0;
    var count: number = 0;
    console.info('BEGIN:')
    for (var word in this.words) {
      pub = this.words[word];
      total = total + pub.count;
      count++;
    }
    var nums: Array<number> = [];
    for (var word in this.words) {
      pub = this.words[word];
      nums.push(pub.count);
    }
    var sorted_nums: Array<number> = nums.sort((n1, n2) => n1 - n2);
    console.log('### sorted_nums -> ' + sorted_nums);
    var nth: number = Math.ceil(sorted_nums.length * 0.90);
    console.log('*** nth -> ' + nth)
    var nth_val: number = sorted_nums[nth];
    console.log('*** nth_val -> ' + nth_val)
    for (var word in this.words) {
      pub = this.words[word];
      if (pub.count >= nth_val) {
        console.info(word + ' -> ' + JSON.stringify(pub))
      }
    }
    console.info('END!!!')
  }

  public getPubs(): Array<Publication> {
    var pub: Publication;
    var pubs: Array<any> = [];
    var nums: Array<number> = [];
    for (var word in this.words) {
      pub = this.words[word];
      nums.push(pub.count);
    }
    var sorted_nums: Array<number> = nums.sort((n1, n2) => n1 - n2);
    var nth: number = Math.ceil(sorted_nums.length * 0.90);
    var nth_val: number = sorted_nums[nth];
    for (var word in this.words) {
      pub = this.words[word];
      if (pub.count >= nth_val) {
        pubs.push({word: word, count: pub.count, url: pub.url});
      }
    }
    return pubs;
  }

  private isAlphaNumeric(s:string): boolean {
    for (var i=0; i < s.length; i++) {
      if ( ((s.charCodeAt(i) >= '0'.charCodeAt(0)) && (s.charCodeAt(i) <= '9'.charCodeAt(0)))
        || ((s.charCodeAt(i) >= 'A'.charCodeAt(0)) && (s.charCodeAt(i) <= 'Z'.charCodeAt(0)))
        || ((s.charCodeAt(i) >= 'a'.charCodeAt(0)) && (s.charCodeAt(i) <= 'z'.charCodeAt(0))) ) {
      } else {
        return false;
      }
    }
    return true;
  }

  private isAlpha(s: string): boolean {
    for (var i = 0; i < s.length; i++) {
      if ( ((s.charCodeAt(i) >= 'A'.charCodeAt(0)) && (s.charCodeAt(i) <= 'Z'.charCodeAt(0)))
        || ((s.charCodeAt(i) >= 'a'.charCodeAt(0)) && (s.charCodeAt(i) <= 'z'.charCodeAt(0))) ) {
      } else {
        return false;
      }
    }
    return true;
  }

  public addWords(some_words: string, the_url: string) {
    var word: string;
    var pub: Publication;
    if (some_words) {
      var toks = some_words.split(/(\b[^\s]+\b)/gm);
      console.log('*** toks -> ' + JSON.stringify(toks))
      for (var i in toks) {
        word = toks[i].toLowerCase();
        if (word && (word.length > 4) && (this.isAlpha(word))) {
          if (!this.words[word]) {
            pub = { desc: some_words, url: the_url, count: 1};
            console.log('*** (1) ' + word + ' -> ' + JSON.stringify(pub));
            this.words[word] = pub;
          } else {
            pub = this.words[word];
            pub.count++;
            console.log('*** (2) ' + word + ' -> ' + JSON.stringify(pub));
            this.words[word] = pub;
          }
        }
      }
      //console.log('*** (3) ' + JSON.stringify(this.words));
    } else {
      console.error('WordCloudService :: addWords() requires non-null words.')
    }
  }
}
