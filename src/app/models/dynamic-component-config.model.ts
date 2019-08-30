import {DynamicComponentType} from '../enums/dynamic-component-type.enum';

export interface DynamicComponentConfig {
  content: DynamicComponentConfig[];
  type: DynamicComponentType;
}
