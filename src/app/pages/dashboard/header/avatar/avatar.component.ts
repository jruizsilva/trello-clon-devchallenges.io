import { NgStyle } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './avatar.component.html',
  styles: ``,
})
export class AvatarComponent implements OnInit {
  @Input() src: string = '';
  @Input() width: string = '40px';

  ngOnInit(): void {
    if (this.src.trim().length === 0) {
      this.src = 'https://mdbcdn.b-cdn.net/img/new/avatars/2.webp';
    }
  }
}
