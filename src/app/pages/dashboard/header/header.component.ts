import { Component } from '@angular/core';
import { ButtonVisibilityComponent } from './button-visibility/button-visibility.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonVisibilityComponent],
  templateUrl: './header.component.html',
  styles: ``,
})
export class HeaderComponent {}
