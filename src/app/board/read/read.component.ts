import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BoardService } from '../board.service';
import { Item } from '../item';

@Component({
  selector: 'app-read',
  template: `
    <h1 class="title">{{ item?.title }}</h1>
    <span class="writer">{{ item?.writer }}</span>
    <markdown [data]="item?.contents"></markdown>
    <div class="utility">
      <a [routerLink]="['/editor', { type: 1, id: item?.id }]" class="blue-button">수정</a>
      <a [routerLink]="['/']" class="blue-button">목록</a>
    </div>
  `,
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {
  item: Item;

  constructor(private boardService: BoardService, private route: ActivatedRoute, private router: Router) {
    boardService.getDocData(this.route.snapshot.params.id).subscribe((data: Item) => {
      boardService.updateDocViews(data.id, data.views).subscribe(() => {});
      this.item = data;
    });
  }

  ngOnInit(): void {
  }

}
