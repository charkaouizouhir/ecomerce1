import { Component } from '@angular/core';
import {LignePanier} from "../Modules/ligne-panier";

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent {
  lignesPanies:Array<LignePanier>=[];

}
