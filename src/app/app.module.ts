import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlamengoComponent } from './flamengo/flamengo.component';
import { CorinthiansComponent } from './corinthians/corinthians.component';
import { PalmeirasComponent } from './palmeiras/palmeiras.component';

@NgModule({
  declarations: [
    AppComponent,
    FlamengoComponent,
    CorinthiansComponent,
    PalmeirasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
