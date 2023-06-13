import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { IntroduceRoutes } from './introduce.routing';
@NgModule({
  imports: [
    SharedModule,
    IntroduceRoutes
  ],
  declarations: [

  ],
})
export class IntroduceModule {}
