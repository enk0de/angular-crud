import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { BoardService } from '../board.service';
import { Item, currentItem } from '../item';
import * as moment from 'moment';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  items: Array<Item>;

  constructor(private cdr: ChangeDetectorRef, private boardService: BoardService, private router: Router) {
    boardService.getBoardData().pipe(map(arr =>
      arr.map(i => ({
        id: i.id,
        title: i.title.trim(),
        writer: i.writer.trim(),
        views: i.views,
        diff: [moment(moment.now()).diff(i.created_at, 'days'), moment(moment.now()).diff(i.created_at, 'hours')]
      }))
    )).subscribe((data: Array<Item>) => {
      this.items = data.reverse();
      this.cdr.detectChanges();
    });
  }

  ngOnInit(): void {
  }

  onClick(id: number): void {
    this.router.navigate(['read', id]);
  }
}
