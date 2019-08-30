import {Component} from '@angular/core';
import {DynamicComponentBase} from '../dynamic-component-base';


@Component({
  selector: 'app-cmp1',
  templateUrl: './cmp1.component.html',
  styleUrls: ['./cmp1.component.scss']
})
export class Cmp1Component extends DynamicComponentBase {
}
