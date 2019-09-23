import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Simple Calculator';
  num1 = 0;
  num2 = 0;
  val = 0;
  optr = "#";

  add()
  {
    this.optr="+";
    this.val = this.num1 + this.num2;
  }

  sub()
  {
    this.optr="-";
    this.val = this.num1 - this.num2;
  }

  prod()
  {
    this.optr="*";
    this.val = this.num1 * this.num2;
  }

  quo()
  {
    this.optr="/";
    this.val = this.num1 / this.num2;
  }
}
