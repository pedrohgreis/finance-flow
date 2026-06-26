import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  templateUrl: './menuBar.component.html',
  imports: [RouterLink, RouterLinkActive]
})
export class MenuBarComponent {}
