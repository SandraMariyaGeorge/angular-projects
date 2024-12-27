import { Component } from '@angular/core';

import { CardsComponent } from "../../ui/cards/cards.component";
import { RouterLink } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-explore',
  standalone: true,
  imports: [CardsComponent],
  templateUrl: './explore.component.html',
  styleUrl: './explore.component.scss'
})
export class ExploreComponent {

  constructor(public api:ApiService) { }

}
