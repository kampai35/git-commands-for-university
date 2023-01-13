import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { CommandsPageComponent } from 'src/components/commands-page/commands-page.component';
import { HomePageComponent } from 'src/components/home-page/home-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'commands-page',
    component: CommandsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
