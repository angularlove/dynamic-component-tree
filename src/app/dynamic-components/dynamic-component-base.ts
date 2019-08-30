import {Input} from '@angular/core';
import {DynamicComponentConfig} from '../models/dynamic-component-config.model';

export abstract class DynamicComponentBase {
  @Input() dynamicComponentConfigs: DynamicComponentConfig[];
}
