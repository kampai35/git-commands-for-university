import { NgModule } from '@angular/core';

import { HeaderComponent } from 'src/components/header/header.component';
import { HomePageComponent } from 'src/components/home-page/home-page.component';
import { FooterComponent } from 'src/components/footer/footer.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HomePageComponent,
    FooterComponent
  ],
  exports: [
    HeaderComponent,
    HomePageComponent,
    FooterComponent
  ]
})
export class ComponentsModule { }
