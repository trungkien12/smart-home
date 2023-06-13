import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { AppRoutes } from './app.rouitng';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './modules/home-page/home-page.component';
import { ConstructionComponent } from './modules/construction/construction.component';
import { CarouselComponent } from './shared/components/carousel/carousel.component';
import { PostPreviewComponent } from './shared/components/post-preview/post-preview.component';
import { ConstructionListComponent } from './modules/home-page/constructions/construction-list/construction-list.component';
import { DropdownMenuComponent } from './shared/components/dropdown-menu/dropdown-menu.component';
import { InputComponent } from './shared/controls/input/input.component';
import { TitlePageComponent } from './shared/components/title-page/title-page.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { OpenLetterComponent } from './modules/introduce/open-letter/open-letter.component';
import { CapacityProfileComponent } from './modules/introduce/capacity-profile/capacity-profile.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { ContactComponent } from './modules/contact/contact.component';
import { CommitmentComponent } from './modules/home-page/commitment/commitment.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ContentLayoutComponent,
    HomePageComponent,
    ConstructionComponent, //home page
    CarouselComponent,
    PostPreviewComponent,
    ConstructionListComponent,
    DropdownMenuComponent,
    InputComponent,
    TitlePageComponent,
    HeaderComponent,
    OpenLetterComponent,
    CapacityProfileComponent,
    FooterComponent,
    ContactComponent,
    CommitmentComponent //home page
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    FormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
