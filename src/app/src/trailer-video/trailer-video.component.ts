import { Component } from '@angular/core';
import { IframeVideoComponent } from '../components/iframe-video/iframe-video.component';
import { MainContainerComponent } from '../components/layout';

@Component({
  selector: 'app-trailer-video',
  standalone: true,
  imports: [IframeVideoComponent, MainContainerComponent],
  templateUrl: './trailer-video.component.html',
  styleUrl: './trailer-video.component.scss'
})
export class TrailerVideoComponent {
  videoSrc = 'https://www.youtube.com/embed/watch?v=62uDM9w6ajU&list=PL42UNLc8e48RINrNGumxAKulG5CWgs_yv&index=14';
}
