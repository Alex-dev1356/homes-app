import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';
import { $ } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  //Removing this line since we have transfered our data to db.json
  // protected housingLocationList: HousingLocation[] = [];

  //Declaring the URL of the db.json when running json-server
  url = 'http://localhost:3000/locations';
      
  constructor() { }

  //The :HousingLocation[] is a return type
  async getAllHousingLocations() : Promise<HousingLocation[]> //HousingLocation[] 
  {
    //Making a call the the API Endpoint to retreive the data
    // return this.housingLocationList;

    const data = await fetch(this.url);
    return await data.json() ?? [];
  }

  async getHousingLocationById(id: number) : Promise<HousingLocation | undefined>
  {
    //Using string interpolation to build the URL with the id
    const data = await fetch(`${this.url}/${id}`); 
    return await data.json() ?? [];
    // return this.housingLocationList.find(housingLocation => housingLocation.id === id);
  }

  submitApplication(firstName: string, lastName: string, email: string)
  {
      console.log(firstName, lastName, email);
  }
}
