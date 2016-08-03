import { Component } from '@angular/core';

import { HeaderComponent } from './header.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  directives: [HeaderComponent]
})
export class AppComponent {
  title = 'app works!';
}
