import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
//Importing the HousingLocation interface
import { HousingLocation } from '../housing-location';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" #filter>
        <button class="primary" type="button" (click)="FilterResults(filter.value)">Search</button>
      </form>
    </section>
      <!-- Using the *ngFor directive to loop over the list of housing locations -->
      <!-- Here we use as well the property binding to pass the data to the child component
       where [housingLocation]="housingLocation" -->
      <app-housing-location 
      *ngFor = "let housingLocation of filteredLocationList"
      [housingLocation]="housingLocation">
      </app-housing-location>
    <section class="results"></section>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
    //Adding a new property to the component, housingLocationList of type HousingLocation[]
    //and we're gonna assign it to an empyt array
    housingLocationList: HousingLocation[] = []
    housingService: HousingService = inject(HousingService)

    //Adding a new Property
    filteredLocationList: HousingLocation[] = []
    
    constructor()
    {
      // this.housingLocationList = this.housingService.getAllHousingLocations();

      //We need to update the constructor method to call the new Promised-based Service
      this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) =>
      {
        this.housingLocationList = housingLocationList;
        this.filteredLocationList = housingLocationList;
      }) 
    }

    FilterResults(text: string){
      //This is the code that checks for blank text
      if(!text){
        this.filteredLocationList = this.housingLocationList;
      }

      //This is where we'll handle the actual filtering of the application
      this.filteredLocationList = this.housingLocationList.filter(
        housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase())
      );
    }
}
