import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as UI from './Components/index';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,UI.Footer, UI.Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('GungnirRol');
}
