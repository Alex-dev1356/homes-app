import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  protected housingLocationList: HousingLocation[] = [];
      
  constructor() { }

  //The :HousingLocation[] is a return type
  getAllHousingLocations() : HousingLocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number) : HousingLocation | undefined
  {
    return this.housingLocationList.find(housingLocation => housingLocation.id === id);
  }

  submitApplication(firstName: string, lastName: string, email: string)
  {
      console.log(firstName, lastName, email);
  }
}
