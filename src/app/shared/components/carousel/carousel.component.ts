import { Component, EventEmitter, Input, Output } from '@angular/core';
import { slide } from 'src/app/modules/home-page/modal/slide';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {

  @Input() slides: slide[] = [];
  // @Input() width: string = '100%'
  // @Input() height: string = '60vh'
  @Input() autoPlay: boolean = true
  @Input() AutoPlaySpeed: string = '3000';
}
