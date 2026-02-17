import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <article>
      <img class="listing-photo" [src]="housingLocation?.photo">
      <section class="listing-description">
        <h2 class="listing-heading"> {{housingLocation?.name}} </h2>
        <p class="listing-location"> {{housingLocation?.city}}, {{housingLocation?.state}} </p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this location</h2>
        <ul>
          <li>Units availabe: {{housingLocation?.availableUnits}}</li>
          <li>Does this location have wifi: {{housingLocation?.wifi}}</li>
          <li>Does this location have laundry: {{housingLocation?.laundry}}</li>
        </ul>
      </section>
      <section class="listing-apply">
        <h2 class="section-heading">Apply to live here</h2>
        
        <!-- Replaceing this with a form Element -->
        <!-- <button class="primary">Apply now</button> -->

        <form [formGroup]="applyForm" (submit)="submitApplication()">
          <label for="first-name">First Name</label>
          <input id="first-name" type="text" formControlName="firstName">
          <label for="last-name">Last Name</label>
          <input id="last-name" type="text" formControlName="lastName">
          <label for="email">Email</label>
          <input id="email" type="email" formControlName="email">
          <button type="submit" class="primary">Apply now</button>
        </form>
      </section>
    </article>
  `,
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  //The ActivatedRoute is a reference to the current route we're matched against in the 
  //application
  route: ActivatedRoute = inject(ActivatedRoute);

  housingService: HousingService = inject(HousingService);

  housingLocation: HousingLocation | undefined;

  //Adding new property for the Form
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  //Creating a method
  constructor()
  {
    const housingLicationId = Number(this.route.snapshot.paramMap.get('id'));
    // this.housingLocation  = this.housingService.getHousingLocationById(housingLicationId);
  
    //Updating the constructor method to call the new Promised-based Service
    this.housingService.getHousingLocationById(housingLicationId).then(housingLocation => {
      this.housingLocation = housingLocation;
    });
  }

  //Adding a method to submit the form
  submitApplication()
  {
    //Calling the method from the housingService
      this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '', //The ?? is a null coalescing operator
      this.applyForm.value.lastName ?? '', //So if the value on the left hand side
      this.applyForm.value.email ?? ''    //is null, then use the value on the right hand side
    );
  }
}
