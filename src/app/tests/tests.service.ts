import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Test } from './test'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMiIsInNjcCI6InVzZXJzIiwiYXVkIjpudWxsLCJpYXQiOjE2NzE4MjQ0MjksImV4cCI6MTY3NDQ1NDE3NSwianRpIjoiNGNjOGUyZTAtN2YxZC00N2JkLWE2NzItYjY0ZjVhODk2NmMyIn0.Qg7_rdoeXK6YUQKYDmI0XVhKeKcZ3jrUIJTJlXyogd4"
  })
};

@Injectable()
export class TestsService {
  testsUrl = 'http://localhost:4010/api/v1/tests'

  constructor(
    private http: HttpClient) {
  }

  getTests(): Observable<Test[]> {
    return this.http.get<Test[]>(this.testsUrl, httpOptions)
  }

  addTest(test: Test): Observable<Test> {
    return this.http.post<Test>(this.testsUrl, test, httpOptions)
  }

  deleteHero(id: number): Observable<unknown> {
    const url = `${this.testsUrl}/${id}`
    return this.http.delete(url, httpOptions)
  }

  updateHero(test: Test): Observable<Test> {
    return this.http.put<Test>(this.testsUrl, test, httpOptions)
  }
}