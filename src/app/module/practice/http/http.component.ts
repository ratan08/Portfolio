import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.scss']
})
export class HttpComponent implements OnInit {
  postData;

  displayedColumns: string[] = ['id', 'title', 'update', 'delete'];

  url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient, private snack: MatSnackBar) { }

  ngOnInit(): void {
    this.get();
  }
  get() {
    this.http.get(this.url)
      .subscribe((data) => {
        this.postData = data;

      })
  }
  deletePost(userId) {
    const deleteUrl = this.url + '/' + userId;
    this.http.delete(deleteUrl).subscribe(
      (data) => {
        this.postData.splice(userId - 1, 1)
      }
    )
  }
  editPost(data) {
    const editUrl = this.url + '/' + data.id;
    this.http.put(editUrl, data)
      .subscribe(res => {
        console.log(res);

      })
  }
  addPost(input) {
    let post = { title: input.value }
    input.value = "";
    this.http.post(this.url, JSON.stringify(post))
      .subscribe(response => {
        post['id'] = response['id'];
        this.postData.splice(0, 0, post)
      })
  }
}
