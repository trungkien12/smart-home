import { NgModule } from '@angular/core';
import { HomePageRoutes } from './home-page.routing';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomePageComponent } from './home-page.component';
import { InputComponent } from 'src/app/shared/controls/input/input.component';
import { DropdownMenuComponent } from 'src/app/shared/components/dropdown-menu/dropdown-menu.component';
import { ConstructionListComponent } from './constructions/construction-list/construction-list.component';
import { PostPreviewComponent } from 'src/app/shared/components/post-preview/post-preview.component';
import { CarouselComponent } from 'src/app/shared/components/carousel/carousel.component';
import { ConstructionComponent } from '../construction/construction.component';
import { ContentLayoutComponent } from 'src/app/layout/content-layout/content-layout.component';
import { TitlePageComponent } from 'src/app/shared/components/title-page/title-page.component';
@NgModule({
  imports: [SharedModule, HomePageRoutes],
  declarations: [
    // ContentLayoutComponent,
    // HomePageComponent,
    // ConstructionComponent,
    // CarouselComponent,
    // PostPreviewComponent,
    // ConstructionListComponent,
    // DropdownMenuComponent,
    // InputComponent,
    // TitlePageComponent
  ],
})
export class HomePageModule {}
