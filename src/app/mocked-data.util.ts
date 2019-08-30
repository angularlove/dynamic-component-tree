import {DynamicComponentConfig} from './models/dynamic-component-config.model';
import {DynamicComponentType} from './enums/dynamic-component-type.enum';

const mock = {
  type: DynamicComponentType.cmp1,
  content: [{
    type: DynamicComponentType.cmp2,
    content: [{
      type: DynamicComponentType.cmp4,
      content: []
    }]
  },
    {
      type: DynamicComponentType.cmp2,
      content: [{
        type: DynamicComponentType.cmp3,
        content: []
      }, {
        type: DynamicComponentType.cmp3,
        content: []
      },
        {
          type: DynamicComponentType.cmp1,
          content: [{
            type: DynamicComponentType.cmp2,
            content: [{
              type: DynamicComponentType.cmp4,
              content: []
            },
              {
                type: DynamicComponentType.cmp1,
                content: []
              }]
          }]
        }]
    }
  ]
};

export class MockedDataUtil {
  static getDynamicComponentConfig(): DynamicComponentConfig {
    return mock;
  }
}
