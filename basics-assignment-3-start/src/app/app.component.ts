import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .whiteColor {
      color: white
    }
  `]
})
export class AppComponent {
  title = 'basics-assignment-3-start';

  hideDetails = true;
  counter: number = 0;
  buttonClicks: any = [];

  onBtnClick() {
    this.hideDetails = !this.hideDetails;
    this.counter++;
    //this.buttonClicks.push(this.counter);
    this.buttonClicks.push(new Date());
  }
}
