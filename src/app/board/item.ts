import * as moment from 'moment';

export class Item {
  id: number;
  title: string;
  writer: string;
  views: number;
  contents?: string;
  diff: Array<number>;
}

export let currentItem: Item = null;
