import { Component } from '@angular/core';
import { LogoComponent } from './logo/logo.component';
import { SearchComponent } from './search/search.component';
import { UserDropdownComponent } from './user-dropdown/user-dropdown.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [UserDropdownComponent, SearchComponent, LogoComponent],
  templateUrl: './navbar.component.html',
  styles: ``,
})
export class NavbarComponent {}
