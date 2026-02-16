import {Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

const routeConfig: Routes = [
    {
        //The path represents w/c URL matches w/c component, when users visits the app
        //we want them to be routed to the home component by default, that's the reason
        //the path is empty 
        path: '',
        component: HomeComponent,
        //setting the pace title for each route
        title: 'Home Page'

    },
    //Adding route for the Details of each property
    {
        path: 'details',
        component: DetailsComponent,
        title: 'Details Page'
    }
];

export default routeConfig;