import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      details works! {{housingLicationId}}
    </p>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  //The ActivatedRoute is a reference to the current route we're matched against in the 
  //application
  route: ActivatedRoute = inject(ActivatedRoute);
  //Creating another property
  housingLicationId = 0;

  //Creating a method
  constructor()
  {
    this.housingLicationId = Number(this.route.snapshot.paramMap.get('id'));
  }
}
