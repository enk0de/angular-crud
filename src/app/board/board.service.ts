import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  constructor(private http: HttpClient) {
  }

  getBoardData(): Observable<any> {
    return this.http.get('http://localhost:1337/boards');
  }

  getDocData(id: number): Observable<any> {
    return this.http.get('http://localhost:1337/boards/' + id);
  }

  postDoc(writer: string, title: string, contents: string): Observable<any> {
    return this.http.post('http://localhost:1337/boards', {
      title,
      contents,
      writer,
      views: 0,
    });
  }

  updateDoc(id: any, writer: string, title: string, contents: string): Observable<any> {
    return this.http.put('http://localhost:1337/boards/' + id, {
      title,
      contents,
      writer,
    });
  }

  updateDocViews(id: any, views: number): Observable<any> {
    return this.http.put('http://localhost:1337/boards/' + id, {
      views: views + 1,
    });
  }
}
