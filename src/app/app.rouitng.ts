import { RouterModule, Routes } from "@angular/router";
import { ContentLayoutComponent } from "./layout/content-layout/content-layout.component";
import { ContactComponent } from "./modules/contact/contact.component";
import { FactoryComponent } from "./modules/factory/factory.component";
import { TypicalProjectsComponent } from "./modules/typical-projects/typical-projects.component";
import { ComboInteriorComponent } from "./modules/combo-interior/combo-interior.component";

const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../app/modules/home-page/home-page.module').then(
            (m) => m.HomePageModule
          )
      },
      {
        path: 'introduce',
        loadChildren: () =>
          import('../app/modules/introduce/introduce.modules').then(
            (m) => m.IntroduceModule
          )
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('./modules/contact/contact.module').then(
            (m) => m.ContactModule
          )
      },
      {
        path: 'factory',
        component: FactoryComponent
      },
      {
        path: 'typical-projects',
        component: TypicalProjectsComponent
      },
      {
        path: 'combo-interior',
        component: ComboInteriorComponent
      }
    ]
  }
];

export const AppRoutes = RouterModule.forRoot(routes, {
  paramsInheritanceStrategy: 'always'
});
