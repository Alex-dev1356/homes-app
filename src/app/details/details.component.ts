import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      <!-- Making the ID optional -->
      details works! {{housingLocation?.id}}
    </p>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  //The ActivatedRoute is a reference to the current route we're matched against in the 
  //application
  route: ActivatedRoute = inject(ActivatedRoute);

  housingService: HousingService = inject(HousingService);

  housingLocation: HousingLocation | undefined;

  //Creating a method
  constructor()
  {
    const housingLicationId = Number(this.route.snapshot.paramMap.get('id'));
    this.housingLocation  = this.housingService.getHousingLocationById(housingLicationId);
  }
}
