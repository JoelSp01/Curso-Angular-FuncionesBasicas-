import { Component } from '@angular/core';
import { MainContainerComponent } from '../components/layout';
import { FadeInDirective } from '../components/directives/animations';


@Component({
  selector: 'app-welcome',
  imports: [MainContainerComponent, FadeInDirective],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {

}
