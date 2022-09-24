import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListRenderComponentComponent } from './components/list-render-component/list-render-component.component';

const routes: Routes = [
  {path:'', component: FirstComponentComponent},
  {path:'list', component: ListRenderComponentComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
