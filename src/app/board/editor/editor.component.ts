import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BoardService } from '../board.service';
import { Item } from '../item';
import EditorType from './editor.type';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  type: EditorType;
  writer: string;
  contents: string;
  title: string;
  targetId?: number;

  constructor(private route: ActivatedRoute, private router: Router, private boardService: BoardService) {
    this.type = +route.snapshot.params.type;
    if (this.type === EditorType.modify) {
      this.boardService.getDocData(route.snapshot.params.id).subscribe((data: Item) => {
        this.targetId = data.id;
        this.writer = data.writer;
        this.contents = data.contents;
        this.title = data.title;
      });
    }
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (!this.writer) {
      alert('작성자를 입력해주세요.');
    } else if (!this.title) {
      alert('제목을 입력해주세요.');
    } else if (!this.contents) {
      alert('내용을 입력해주세요.');
    } else {
      if (this.type === EditorType.write) {
        this.boardService.postDoc(this.writer, this.title, this.contents)
          .subscribe(() => alert('작성되었습니다.'), () => alert('작성에 실패하였습니다'), () =>
            this.router.navigate(['/']));
      } else {
        this.boardService.updateDoc(this.targetId, this.writer, this.title, this.contents)
          .subscribe(() => alert('작성되었습니다.'), () => alert('작성에 실패하였습니다'), () =>
            this.router.navigate(['/']));
      }
    }
  }
}
