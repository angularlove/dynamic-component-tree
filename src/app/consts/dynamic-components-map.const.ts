import {DynamicComponentType} from '../enums/dynamic-component-type.enum';
import {Cmp1Component} from '../dynamic-components/cmp1/cmp1.component';
import {Cmp2Component} from '../dynamic-components/cmp2/cmp2.component';
import {Cmp3Component} from '../dynamic-components/cmp3/cmp3.component';
import {Cmp4Component} from '../dynamic-components/cmp4/cmp4.component';

export const dynamicComponentMap = {
  [DynamicComponentType.cmp1]: Cmp1Component,
  [DynamicComponentType.cmp2]: Cmp2Component,
  [DynamicComponentType.cmp3]: Cmp3Component,
  [DynamicComponentType.cmp4]: Cmp4Component
};
