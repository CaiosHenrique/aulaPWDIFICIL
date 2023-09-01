import { PalmeirasComponent } from './palmeiras/palmeiras.component';
import { FlamengoComponent } from './flamengo/flamengo.component';
import { CorinthiansComponent } from './corinthians/corinthians.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"", component:AppComponent},
  {path:"Corinthians", component:CorinthiansComponent},
  {path:"Flamengo", component:FlamengoComponent},
  {path:"Palmeiras", component:PalmeirasComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
