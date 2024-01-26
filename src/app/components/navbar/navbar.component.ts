import { Component } from '@angular/core';
import { UserDropdownComponent } from './user-dropdown/user-dropdown.component';
import { LogoComponent } from './logo/logo.component';
import { SearchComponent } from './search/search.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [UserDropdownComponent, LogoComponent, SearchComponent],
  templateUrl: './navbar.component.html',
  styles: ``,
})
export class NavbarComponent {}
