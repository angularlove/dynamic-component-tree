import {ComponentFactoryResolver, ComponentRef, Directive, EventEmitter, Input, Output, ViewContainerRef} from '@angular/core';
import {DynamicComponentConfig} from '../../models/dynamic-component-config.model';
import {dynamicComponentMap} from '../../consts/dynamic-components-map.const';
import {DynamicComponentBase} from '../dynamic-component-base';

@Directive({
  selector: '[appDynamicComponentLoader]'
})
export class DynamicComponentLoaderDirective {

  @Output() cmpRef = new EventEmitter<ComponentRef<DynamicComponentBase>>();

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private viewContainerRef: ViewContainerRef) {
  }

  @Input() set appDynamicComponentLoader(dynamicComponentConfig: DynamicComponentConfig) {
    const componentType = dynamicComponentMap[dynamicComponentConfig.type];
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
    const componentRef = this.viewContainerRef.createComponent(componentFactory);
    (componentRef.instance as DynamicComponentBase).dynamicComponentConfigs = dynamicComponentConfig.content;
    this.cmpRef.emit(componentRef);
  }
}
