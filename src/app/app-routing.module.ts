import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponenteComponent } from './components/first-componente/first-componente.component';
import { ListRenderComponent } from './components/list-render/list-render.component';

const routes: Routes = [
  {path:'',component:FirstComponenteComponent},
  {path:'list',component:ListRenderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
