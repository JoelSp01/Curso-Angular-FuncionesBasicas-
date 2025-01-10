import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './src/toolbar/toolbar.component';
import { WelcomeComponent } from './src/welcome/welcome.component';
import { SocialMediaComponent } from './src/social-media/social-media.component';
import { TrailerVideoComponent } from './src/trailer-video/trailer-video.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ToolbarComponent, WelcomeComponent, RouterOutlet, SocialMediaComponent, TrailerVideoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'CursoAngular';
}
