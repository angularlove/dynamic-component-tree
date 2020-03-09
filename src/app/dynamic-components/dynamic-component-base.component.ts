import {Component, Input} from '@angular/core';
import {DynamicComponentConfig} from '../models/dynamic-component-config.model';

@Component({template: ''})
export abstract class DynamicComponentBaseComponent {
  @Input() dynamicComponentConfigs: DynamicComponentConfig[];
}
