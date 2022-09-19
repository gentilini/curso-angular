import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { FatherComponentComponent } from './components/father-component/father-component.component';
import { SonComponentComponent } from './components/son-component/son-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    FatherComponentComponent,
    SonComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
