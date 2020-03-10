import {Component, NgModule} from '@angular/core';
import {DynamicComponentBaseComponent} from '../dynamic-component-base.component';
import {SharedModule} from '../../shared.module';

@Component({
  selector: 'app-cmp1',
  templateUrl: './cmp1.component.html',
  styleUrls: ['./cmp1.component.scss'],
})
export class Cmp1Component extends DynamicComponentBaseComponent {
}

@NgModule({
  declarations: [Cmp1Component],
  imports: [SharedModule]
})
class Cmp1Module {
}
