import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { slide } from '../modal/slide';
import { slides } from 'src/assets/data-fake/image-slide';
import { of } from 'rxjs/internal/observable/of';
import { postPreviews } from 'src/assets/data-fake/post-preview';
import { postPreview } from '../modal/post-preview';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  getSlides(): Observable<slide[]> {
    return of(slides)
  }
  getPostReview(): Observable<postPreview[]> {
    return of(postPreviews)
  }
  constructor() { }
}
