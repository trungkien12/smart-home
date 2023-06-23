import { Component, OnInit } from '@angular/core';
import { HomePageService } from '../services/home-page.service';
import { slide } from '../modal/slide';
import { postPreview } from '../modal/post-preview';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  slides: slide[] = [];
  constructor(
    private homePageService: HomePageService
  ) {}

  ngOnInit(): void {
    this.getSlides()
  }

  getSlides() {{
    this.homePageService
      .getSlides()
      .pipe()
      .subscribe((item: any) => {
        this.slides = item
      })
  }}


}
