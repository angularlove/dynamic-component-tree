import {Component, NgModule} from '@angular/core';
import {DynamicComponentBaseComponent} from '../dynamic-component-base.component';
import {SharedModule} from '../../shared.module';

@Component({
  selector: 'app-cmp2',
  templateUrl: './cmp2.component.html',
  styleUrls: ['./cmp2.component.scss']
})
export class Cmp2Component extends DynamicComponentBaseComponent {
}

@NgModule({
  declarations: [Cmp2Component],
  imports: [SharedModule]
})
export class Cmp2Module {
}
