import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location.js';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="listing">
      <img class="listing-photo" src="" alt="">
      <h2 class="listing-heading">Heading</h2>
      <p class="listing-location">Location</p>
    </section>
  `,
  styleUrls: ['./housing-location.component.css']
})
export class HousingLocationComponent {
    //Using the @Input() decorator to make it an input property\
    //The ! is a non-null assertion operator that tells the compiler that the value of 
    //the property won't be null or undefined. This is useful when you know that the value is not null
    @Input() housingLocation!:HousingLocation;
}
