import {ComponentFactoryResolver, ComponentRef, Directive, EventEmitter, Input, Output, Type, ViewContainerRef} from '@angular/core';
import {DynamicComponentConfig} from '../../models/dynamic-component-config.model';
import {DynamicComponentBaseComponent} from '../dynamic-component-base.component';
import {DynamicComponentType} from '../../enums/dynamic-component-type.enum';

const dynamicImportsMap = {
  [DynamicComponentType.cmp1]: () => import('src/app/dynamic-components/cmp1/cmp1.component'),
  [DynamicComponentType.cmp2]: () => import('src/app/dynamic-components/cmp2/cmp2.component'),
  [DynamicComponentType.cmp3]: () => import('src/app/dynamic-components/cmp3/cmp3.component'),
  [DynamicComponentType.cmp4]: () => import('src/app/dynamic-components/cmp4/cmp4.component')
};

@Directive({
  selector: '[appDynamicComponentLoader]'
})
export class DynamicComponentLoaderDirective {

  @Output() cmpRef = new EventEmitter<ComponentRef<DynamicComponentBaseComponent>>();

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef) {
  }

  @Input() set appDynamicComponentLoader(dynamicComponentConfig: DynamicComponentConfig) {
    this.resolveCmpClassRef(dynamicComponentConfig.type).then((cmp) => this.createDynamicCmp(cmp, dynamicComponentConfig.content));
  }

  private resolveCmpClassRef(dynamicComponentType: DynamicComponentType): Promise<Type<DynamicComponentBaseComponent>> {
    return (dynamicImportsMap[dynamicComponentType]() as any).then(module => Object.values(module)[0]);
  }

  private createDynamicCmp(dynamicComponent: Type<DynamicComponentBaseComponent>, content: DynamicComponentConfig[]): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory<DynamicComponentBaseComponent>(dynamicComponent);
    const componentRef = this.viewContainerRef.createComponent(componentFactory);
    (componentRef.instance as DynamicComponentBaseComponent).dynamicComponentConfigs = content;
    this.cmpRef.emit(componentRef);
  }
}
