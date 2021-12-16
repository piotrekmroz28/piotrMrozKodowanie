import { Injectable } from '@angular/core';
import { WORDS } from '../data/data-base';
import { WordType } from '../data/models';
import { Type } from '../data/models';

@Injectable({
  providedIn: 'root'
})
export class WordsService {

  private words: WordType[] = [];
  private nouns: WordType[] = [];
  private verbs: WordType[] = [];
  

  constructor() { 
    this.words = WORDS;
  }

  getWords(): WordType[]{
    return this.words;
  }

  getNouns(): WordType[]{
    return this.nouns;
  }

  getVerbs(): WordType[]{
    return this.verbs;
  }

  addNoun(value: WordType): void{
    this.nouns.push(value);
  }

  addVerbe(value: WordType): void{
    this.verbs.push(value);
  }

  check() {
    this.nouns.map(word => (word.correct = word.type === Type.NOUN));
    this.verbs.map(word => (word.correct = word.type === Type.VERB));
    
  }
}
