import { RouterModule, Routes } from "@angular/router";
import { ContentLayoutComponent } from "./layout/content-layout/content-layout.component";
import { ContactComponent } from "./modules/contact/contact.component";

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
      }
    ]
  }
];

export const AppRoutes = RouterModule.forRoot(routes, {
  paramsInheritanceStrategy: 'always'
});
