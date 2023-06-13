import { Component, OnInit } from '@angular/core';
import { postPreview } from '../../modal/post-preview';
import { HomePageService } from '../../services/home-page.service';

@Component({
  selector: 'app-construction-list',
  templateUrl: './construction-list.component.html',
  styleUrls: ['./construction-list.component.scss']
})
export class ConstructionListComponent implements OnInit {
  postPreviews: postPreview[] = [];
  constructor(
    private homePageService: HomePageService
  ) {}

  ngOnInit(): void {
    this.getPostPreviews()
  }

  getPostPreviews() {{
    this.homePageService
      .getPostReview()
      .pipe()
      .subscribe((item: any) => {
        this.postPreviews = item
      })
  }}
}
