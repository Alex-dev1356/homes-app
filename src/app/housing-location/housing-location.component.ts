import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../housing-location.js';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="listing">
      <!-- Using the property binding on the src attribute to bind the URL of the image and treat
       the "housingLocation.photo" as a property from the parent component which is "housingLocation"-->
      <!-- Using String Interpolation on the alt attribute to bind the value of the "housingLocation.name"-->
      <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
      <h2 class="listing-heading">{{housingLocation.name}}</h2>
      <p class="listing-location">{{housingLocation.city}}, {{housingLocation.state}}</p>
      <a routerLink="details">Learn More</a>
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
