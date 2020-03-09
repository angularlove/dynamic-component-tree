import {Component} from '@angular/core';
import {DynamicComponentBaseComponent} from '../dynamic-component-base.component';


@Component({
  selector: 'app-cmp1',
  templateUrl: './cmp1.component.html',
  styleUrls: ['./cmp1.component.scss']
})
export class Cmp1Component extends DynamicComponentBaseComponent {
  onCmpRef(test) {
    console.log(test);
  }
}
