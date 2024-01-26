import { Component } from '@angular/core';
import { ButtonVisibilityComponent } from './button-visibility/button-visibility.component';
import { AvatarComponent } from './avatar/avatar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonVisibilityComponent, AvatarComponent],
  templateUrl: './header.component.html',
  styles: ``,
})
export class HeaderComponent {}
