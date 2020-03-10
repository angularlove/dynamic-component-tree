import {Component, NgModule} from '@angular/core';
import {DynamicComponentBaseComponent} from '../dynamic-component-base.component';
import {SharedModule} from '../../shared.module';

@Component({
  selector: 'app-cmp3',
  templateUrl: './cmp3.component.html',
  styleUrls: ['./cmp3.component.scss']
})
export class Cmp3Component extends DynamicComponentBaseComponent {
}

@NgModule({
  declarations: [Cmp3Component],
  imports: [SharedModule]
})
export class Cmp3Module {
}
