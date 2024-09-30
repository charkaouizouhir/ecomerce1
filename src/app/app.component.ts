import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ListproduitsComponent} from "../listproduits/listproduits.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListproduitsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
  filier:string="genie informatique";
}
