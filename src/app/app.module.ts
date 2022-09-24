import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { FatherComponentComponent } from './components/father-component/father-component.component';
import { SonComponentComponent } from './components/son-component/son-component.component';
import { DirectivesComponentComponent } from './components/directives-component/directives-component.component';
import { IfRenderComponentComponent } from './components/if-render-component/if-render-component.component';
import { EventComponentComponent } from './components/event-component/event-component.component';
import { EmitterComponentComponent } from './components/emitter-component/emitter-component.component';
import { ChangeNumberComponentComponent } from './components/change-number-component/change-number-component.component';
import { ListRenderComponentComponent } from './components/list-render-component/list-render-component.component';
import { PipesComponentComponent } from './components/pipes-component/pipes-component.component';
import { TwoWayDataBindingComponentComponent } from './components/two-way-data-binding-component/two-way-data-binding-component.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    FatherComponentComponent,
    SonComponentComponent,
    DirectivesComponentComponent,
    IfRenderComponentComponent,
    EventComponentComponent,
    EmitterComponentComponent,
    ChangeNumberComponentComponent,
    ListRenderComponentComponent,
    PipesComponentComponent,
    TwoWayDataBindingComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
