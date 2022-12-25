import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// http
import { HttpClientModule } from '@angular/common/http';

// components
import { TestsComponent } from './tests/tests.component'
import { TopMenuComponent } from './layout/top-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    TestsComponent,
    TopMenuComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
