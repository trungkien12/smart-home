import { Component, Input } from '@angular/core';
import { postPreview } from 'src/app/modules/home-page/modal/post-preview';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
  styleUrls: ['./post-preview.component.scss']
})
export class PostPreviewComponent {

  @Input() postPreviews: postPreview[] = [];
  @Input() imgSrc: string = '';
  @Input() name: string = 'Tiêu đề bài viết';
  @Input() desc: string = '1đ';

  cardBodyStyle = {
    height: '100px',
    overflow: 'hidden'
  }
}
