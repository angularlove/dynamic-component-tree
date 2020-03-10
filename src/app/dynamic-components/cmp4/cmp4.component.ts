import {Component, NgModule} from '@angular/core';
import {DynamicComponentBaseComponent} from '../dynamic-component-base.component';
import {SharedModule} from '../../shared.module';

@Component({
  selector: 'app-cmp4',
  templateUrl: './cmp4.component.html',
  styleUrls: ['./cmp4.component.scss']
})
export class Cmp4Component extends DynamicComponentBaseComponent {
}

@NgModule({
  declarations: [Cmp4Component],
  imports: [SharedModule]
})
export class Cmp4Module {
}
