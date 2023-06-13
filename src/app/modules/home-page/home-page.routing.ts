import { RouterModule, Routes } from "@angular/router";
import { ConstructionListComponent } from "./constructions/construction-list/construction-list.component";
import { ConstructionDetailComponent } from "./constructions/construction-detail/construction-detail.component";
import { HomePageComponent } from "./home-page.component";
import { CommitmentComponent } from "./commitment/commitment.component";

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'construction',
    component: ConstructionListComponent
  },
  {
    path: 'commitment',
    component: CommitmentComponent
  }
];

export const HomePageRoutes = RouterModule.forChild(routes);
