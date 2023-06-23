import { NgModule } from '@angular/core';
import { HomePageRoutes } from './home-page.routing';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  imports: [SharedModule, HomePageRoutes],
  declarations: [
  ],
})
export class HomePageModule {}
