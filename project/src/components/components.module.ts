import { NgModule } from '@angular/core';

import { CommandsPageComponent } from 'src/components/commands-page/commands-page.component';
import { HeaderComponent } from 'src/components/header/header.component';
import { HomePageComponent } from 'src/components/home-page/home-page.component';
import { FooterComponent } from 'src/components/footer/footer.component';

@NgModule({
  declarations: [
    CommandsPageComponent,
    HeaderComponent,
    HomePageComponent,
    FooterComponent,
  ],
  exports: [
    CommandsPageComponent,
    HeaderComponent,
    HomePageComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
