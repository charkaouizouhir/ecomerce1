import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ListproduitsComponent} from "../listproduits/listproduits.component";
import {NavbarComponent} from "./navbar/navbar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListproduitsComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
  filier:string="genie informatique";
}
