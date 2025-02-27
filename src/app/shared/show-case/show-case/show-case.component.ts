import { Component } from '@angular/core';
import {SwiperComponent} from '../../swiper/swiper.component';
import {ImageSliderComponent} from '../../../hero-list/image-slider/image-slider.component';

@Component({
  selector: 'app-show-case',
  imports: [
    SwiperComponent,
    ImageSliderComponent,
    // SwiperComponent
  ],
  templateUrl: './show-case.component.html',
  styleUrl: './show-case.component.scss'
})
export class ShowCaseComponent {


  data=
    [
      {
        "_id": "67a8623353a1da782b9acb3a",
        "name": "Banner 1",
        "images": [
          "https://cdn.saleecom.com/upload/images/67a8615b53a1da782b9acad9/banner-1-1340x345px-594c.webp?resolution=2424_624",
          "https://cdn.saleecom.com/upload/images/67a8615b53a1da782b9acad9/banner-1-mobile-6c39.webp?resolution=1920_658"
        ]
      },
      {
        "_id": "67b17966a8caa30168a52bb7",
        "name": "test111",
        "images": [
          "https://cdn.saleecom.com/upload/images/67a8615b53a1da782b9acad9/12-692c.webp?resolution=1920_658"
        ]
      },
      {
        "_id": "67a87abf53a1da782b9accb1",
        "name": "Banner 2",
        "images": [
          "https://cdn.saleecom.com/upload/images/67a8615b53a1da782b9acad9/5-d1076.webp?resolution=2311_595",
          "https://cdn.saleecom.com/upload/images/67a8615b53a1da782b9acad9/banner-4-mobile-8323.webp?resolution=1920_658"
        ]
      },
      {
        "_id": "67b17932a8caa30168a52b9c",
        "name": "test1",
        "images": [
          "https://cdn.saleecom.com/upload/images/67a8615b53a1da782b9acad9/12-692c.webp?resolution=1920_658"
        ]
      },
      {
        "_id": "67a87ad453a1da782b9accb9",
        "name": "Banner 3",
        "images": [
          "https://cdn.saleecom.com/upload/images/67a8615b53a1da782b9acad9/6-3bd10.webp?resolution=2311_595",
          "https://cdn.saleecom.com/upload/images/67a8615b53a1da782b9acad9/banner-3-mobile-986c.webp?resolution=1920_658"
        ]
      }
      ]

}
