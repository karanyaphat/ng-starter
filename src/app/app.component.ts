import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ng-Starter';

  debugx(event:KeyboardEvent){
    console.log("Press... "+event.key);
  }
}
