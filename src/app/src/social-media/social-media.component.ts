import { Component } from '@angular/core';
import { SocialMediaElementComponent } from './social-media-element/social-media-element.component';
import { SocialMediaElement } from './models';
import { MainContainerComponent } from '../components/layout';
import { WobbleDirective } from '../components/directives/animations';

@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [SocialMediaElementComponent, MainContainerComponent, WobbleDirective],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.scss'
})
export class SocialMediaComponent {
    socialMediaList: SocialMediaElement[] = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com',
      imgPath: '/social-media/facebookIcon.png'
    },
    {
      name: 'Twitter',
      url: 'https://www.twitter.com',
      imgPath: '/social-media/twitterIcon.png'
    },
    {
      name: 'Instagram',
      url: 'https://www.twitter.com',
      imgPath: '/social-media/facebookIcon.png'
    },
    {
      name: 'Linkedin',
      url: 'https://www.twitter.com',
      imgPath: '/social-media/twitterIcon.png'
    }
  ]

}
