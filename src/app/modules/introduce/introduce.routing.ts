import { RouterModule, Routes } from "@angular/router";
import { CapacityProfileComponent } from "./capacity-profile/capacity-profile.component";
import { OpenLetterComponent } from "./open-letter/open-letter.component";

const routes: Routes = [
  {
    path: 'open-letter',
    component: OpenLetterComponent
  },
  {
    path: 'capacity-profile',
    component: CapacityProfileComponent
  }
];

export const IntroduceRoutes = RouterModule.forChild(routes);
