import {ComponentFactoryResolver, Directive, Input, Type, ViewContainerRef} from '@angular/core';
import {DynamicComponentConfig} from '../../models/dynamic-component-config.model';
import {DynamicComponentBaseComponent} from '../dynamic-component-base.component';
import {DynamicComponentType} from '../../enums/dynamic-component-type.enum';

const dynamicImportsMap = {
  [DynamicComponentType.cmp1]: () => import('../cmp1/cmp1.component'),
  [DynamicComponentType.cmp2]: () => import('../cmp2/cmp2.component'),
  [DynamicComponentType.cmp3]: () => import('../cmp3/cmp3.component'),
  [DynamicComponentType.cmp4]: () => import('../cmp4/cmp4.component')
};

@Directive({
  selector: '[appDynamicComponentLoader]'
})
export class DynamicComponentLoaderDirective {
  constructor(private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef) {
  }

  @Input() set appDynamicComponentLoader(dynamicComponentConfig: DynamicComponentConfig) {
    this.loadComponent(dynamicComponentConfig);
  }

  private loadComponent(dynamicComponentConfig: DynamicComponentConfig) {
    this.resolveCmpClass<DynamicComponentBaseComponent>(dynamicImportsMap[dynamicComponentConfig.type]).then(cmpClass => {
      const cmpFactory = this.componentFactoryResolver.resolveComponentFactory(cmpClass);
      const cmpRef = this.viewContainerRef.createComponent(cmpFactory);
      (cmpRef.instance as DynamicComponentBaseComponent).dynamicComponentConfigs = dynamicComponentConfig.content;
    });
  }

  private resolveCmpClass<T>(importFn: () => any): Promise<Type<T>> {
    return importFn().then(module => {
      const cmpClass = Object.values(module).find(val => val.hasOwnProperty('ɵcmp'));
      if (!cmpClass) {
        throw new Error('No exported component found!');
      }
      return cmpClass;
    });
  }
}
