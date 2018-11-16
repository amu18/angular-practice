import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DynamicTitleService } from './dynamic-title.service';
import { AppRouter } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRouter
  ],
  providers: [DynamicTitleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
