import { Component, OnInit } from '@angular/core';
import { TestsService } from './tests.service';

import { Test } from './test'

@Component({
  selector: 'tests',
  providers: [TestsService],
  templateUrl: './tests.component.html',
})
export class TestsComponent implements OnInit {
  tests: Test[] = [];

  constructor(private testsService: TestsService) { }

  getTests(): void {
    this.testsService.getTests()
      .subscribe(tests => (this.tests = tests));
  }

  ngOnInit() {
    this.getTests();
  }

}