import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { GifsService } from './gifs/service/gifs.service';

import { GifsModule } from './gifs/gifs.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    GifsModule,
    SharedModule,
  ],
  providers: [GifsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
