import { NgModule } from "@angular/core";
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';

@NgModule({
  exports: [
    NzLayoutModule,
    NzBreadCrumbModule,
    NzIconModule,
    NzInputModule,
    NzCarouselModule,
    NzCardModule,
    NzDropDownModule
  ]
})
export class ZorroAntdModule {}
