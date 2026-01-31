# Angular Homes App
- Install Angular if you don't have it installed

  `npm install -g @angular/cli`

- Clone this branch to your local machine

  `git clone -b homes-app-start git@github.com:angular/codelabs.git homes-app`

- Once the code has been downloaded

  `cd homes-app`

- Install the depencies

  `npm install` 

- Run the application 

  `ng serve`

- alt Attribute
Purpose: Provides alternative text for an image.
Used by: Screen readers, search engines, and when the image fails to load.
In your code:
alt="logo" means that if the image can’t be displayed, the text "logo" will be shown, and screen readers will read it aloud.

- aria-hidden="true"
Purpose: Hides the element from assistive technologies (like screen readers), even if it’s visible on the screen.
Effect:
The image will still be displayed visually.
Screen readers will ignore it completely.
In your code:
aria-hidden="true" tells assistive tech to skip reading this image, so the alt text will not be announced.

- Summary:
alt="logo" → fallback text for images and SEO.
aria-hidden="true" → hides the image from screen readers to avoid redundancy.
If you want the logo to be accessible to screen readers, you should remove aria-hidden="true".
If it’s decorative only, you can keep aria-hidden="true" and set alt="" instead for best accessibility practice.

- Creating new Home Component
 `ng generate component --standalone --inline-template`

--standalone
Purpose: Creates a standalone component instead of a traditional component that must be declared in an NgModule.
Standalone components:
Can be used without being declared in any NgModule.
Import their own dependencies directly in the imports array inside the @Component decorator.
Are useful for module-less or simplified Angular applications.

--inline-template
Purpose: Places the component’s HTML directly inside the template property of the @Component decorator instead of generating a separate .html file.
Benefits:
Keeps small templates in the same file as the component logic.
Reduces the number of files for very simple components.

-  @Input() decorator is used to pass data from a parent component to a child component.
It allows a child component to receive values dynamically from its parent, enabling component communication.

Key Points
Declared in the child component.
Used for one-way data binding (parent → child).
Can have default values.
Supports type checking in TypeScript.
Can be renamed using an alias.

- String Interpolation
String interpolation is used to display component data inside your HTML template. It uses the double curly braces {{ }} syntax.
Example:
@Component({
  selector: 'app-user',
  template: `<p>Hello, {{ name }}!</p>`
})
export class UserComponent {
  name: string = 'Alice';
}
Here, {{ name }} displays the value of the name property from the UserComponent class.
The browser will render: Hello, Alice!
It is ideal for binding string values or simple expressions directly into the HTML content.
Key Points about String Interpolation:
Can evaluate expressions: {{ 1+1 }} will render 2.
Cannot be used to set element or component properties like value or disabled—for that, property binding is required.
Property Binding


- Property binding is used to bind data to an element’s property. It uses square brackets [ ] and allows Angular to dynamically update the property whenever the component data changes.
Example:
@Component({
  selector: 'app-user',
  template: `<input [value]="name">`
})
export class UserComponent {
  name: string = 'Alice';
}
Here, [value]="name" binds the name property of the component to the input element's value property.
If the name changes in the component, the input element will automatically reflect the new value.
Property binding works with HTML element properties, DOM properties, or even child component input properties.

- Link of where to find the list of items added on the housingLocationList property: https://goo.gle/homes-app-listings

- The *ngFor directive in Angular is a structural directive used to render a template for each item in a collection. It is part of the CommonModule and is widely used for creating dynamic lists, tables, and repeated UI elements.

Basic Syntax:

<li *ngFor="let item of items">{{ item }}</li>
Copy
Here, item is a local variable representing each element in the items array.

- *ngIF directive in Angular:
ngIf is used to display or hide the DOM Element based on the expression value assigned to it. The expression value may be either true or false.

Syntax:
<element *ngIf="condition">...</element>

Uses of *ngIf Directive:
Conditional Rendering: *ngIf is commonly used for conditional rendering of elements based on various conditions, such as user authentication status, data availability, or user interactions.
Error Handling: *ngIf can be used to display error messages or fallback content when certain conditions are not met, providing a seamless user experience.
Dynamic UI Components: *ngIf enables the dynamic rendering of UI components based on application state or user inputs, allowing for a more interactive and personalized user experience.

- Link of where to find the list of items added each of the CSS Components: https://goo.gle/homes-app-styles