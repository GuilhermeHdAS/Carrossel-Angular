import { Component } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'carrossel';

  // Slider Images
  slides = [
    {'image': 'https://cdn.pixabay.com/photo/2017/05/09/03/46/alberta-2297204_960_720.jpg'},
    {'image': 'https://cdn.pixabay.com/photo/2016/10/22/17/46/scotland-1761292_960_720.jpg'}, 
    {'image': 'https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_960_720.jpg'}, 
    {'image': 'https://cdn.pixabay.com/photo/2015/07/09/22/45/tree-838667_960_720.jpg'}, 
    {'image': 'https://cdn.pixabay.com/photo/2016/08/09/21/54/yellowstone-national-park-1581879_960_720.jpg'}
  ];
}
