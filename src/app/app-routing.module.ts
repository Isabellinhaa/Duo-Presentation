import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialScreenComponent } from './initial-screen/initial-screen.component';
import { AndersonScreenComponent } from './anderson-screen/anderson-screen.component';
import { IsabellaScreenComponent } from './isabella-screen/isabella-screen.component';

const routes: Routes = [
  {path: '', component: InitialScreenComponent},
  {path: 'anderson-screen', component: AndersonScreenComponent},
  {path: 'isabella-screen', component: IsabellaScreenComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
