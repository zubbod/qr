import { IInfo } from './../interfaces/info.interface.ts';
import { v4 } from '../core/deps.ts';

export class InfoDto implements IInfo {

  text: string;
  title: string;
  createDate: Date;
  id: string;

  constructor(title: string, text: string) {
    this.title = title;
    this.text = text;
    this.id = v4.generate();
    this.createDate = new Date();
  }

}