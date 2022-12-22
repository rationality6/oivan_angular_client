import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { TestsComponent } from './tests/tests.component'

const routes: Routes = [
  { path: '', component: TestsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
