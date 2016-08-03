import { Component } from '@angular/core';

import { HeaderComponent } from './header.component';
import { RecipesComponent } from './recipes';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  directives: [HeaderComponent, RecipesComponent]
})
export class AppComponent {
  title = 'app works!';
}
