import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BoardService } from '../board.service';
import { Item } from '../item';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
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
