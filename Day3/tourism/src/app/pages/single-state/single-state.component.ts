import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-single-state',
  imports: [],
  templateUrl: './single-state.component.html',
  styleUrl: './single-state.component.scss'
})
export class SingleStateComponent {
  data: any;

  constructor(private activated: ActivatedRoute,private api:ApiService) { }

  ngOnInit() {
    let id = this.activated.snapshot.paramMap.get('id');
    console.log(id);

    this.data = this.api.getStateid(Number(id));
  }
}
