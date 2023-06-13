import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContactRoutes } from './contact.routing';
@NgModule({
  imports: [
    SharedModule,
    ContactRoutes
  ],
  declarations: [

  ],
})
export class ContactModule {}
