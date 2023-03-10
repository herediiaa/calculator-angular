import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  calNumber: string = 'noValue';
  calValue: number = 0;
  funcT: string = 'noFunction';

  numero1: number = 0;
  numero2: number = 0;

  onClickValue(val: string, type: string) {
    if (type === 'number') {
      this.onClickNumber(val);
    } else if (type === 'function') {
      this.onClickFunction(val);
    }
  }

  onClickNumber(val: string) {
    if (this.calNumber !== 'noValue') {
      this.calNumber = this.calNumber + val;


    } else {
      this.calNumber = val;

    }
    this.calValue = parseFloat(this.calNumber);
  }
  onClickFunction(val: string) {
    if (val == 'c') {
      this.clearAll();
    } else if (this.funcT == 'noFunction') {
      this.numero1 = this.calValue;

      this.calNumber = 'noValue';
      this.funcT = val;

    } else if (this.funcT !== 'noFunction') {
      this.numero2 = this.calValue;
      this.calculateNumber(val);
    }
  }
  calculateNumber(val: string) {
    if (this.funcT === '+') {
      const total = this.numero1 + this.numero2;
      this.totalAssingValue(total, val);
    } else if (this.funcT === '-') {
      const total = this.numero1 - this.numero2;
      this.totalAssingValue(total, val);
    } else if (this.funcT === '/') {
      const total = this.numero1 / this.numero2;
      this.totalAssingValue(total, val);
    } else if (this.funcT === '*') {
      const total = this.numero1 * this.numero2;
      this.totalAssingValue(total, val);
    } else if (this.funcT === '%') {
      const total = this.numero1 % this.numero2;
      this.totalAssingValue(total, val);
    }
  }
  totalAssingValue(total: number, val: string) {
    if (val == '=') {
      this.onEqualsPress();
    }
    this.calValue = total;
    this.numero1 = total;
    this.numero2 = 0;
    this.calNumber = 'noValue';
    this.funcT = val;
  }
  onEqualsPress() {
    this.numero1 = 0;
    this.numero2 = 0;
    this.calNumber = 'noValue';
    this.funcT = 'noFunction';

  }
  clearAll() {
    this.numero1 = 0;
    this.numero2 = 0;
    this.calNumber = 'noValue';
    this.funcT = 'noFunction';
    this.calValue = 0;

  }
}
