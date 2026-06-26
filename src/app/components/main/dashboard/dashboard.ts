import { Component } from '@angular/core';
import { MenuBarComponent } from "../menu/menuBar.component";

@Component({
  selector: 'app-dashboard',
  imports: [MenuBarComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
  standalone: true
})
export class DashboardComponent {}
