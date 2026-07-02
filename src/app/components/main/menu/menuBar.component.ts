import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  templateUrl: './menuBar.component.html',
  imports: [RouterLink]
})
export class MenuBarComponent {}
