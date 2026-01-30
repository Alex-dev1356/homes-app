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