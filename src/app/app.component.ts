import {Component} from '@angular/core';
import {MockedDataUtil} from './mocked-data.util';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dynamicComponentConfig = MockedDataUtil.getDynamicComponentConfig();
}
