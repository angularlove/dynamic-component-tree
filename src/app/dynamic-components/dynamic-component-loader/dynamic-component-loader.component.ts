import {Component, ComponentFactoryResolver, Input, OnInit, ViewChild} from '@angular/core';
import {DynamicComponentConfig} from '../../models/dynamic-component-config.model';
import {dynamicComponentMap} from '../../consts/dynamic-components-map.const';
import {DynamicComponentsRootDirective} from './dynamic-components-root.directive';
import {DynamicComponentBase} from '../dynamic-component-base';

@Component({
  selector: 'app-dynamic-component-loader',
  templateUrl: './dynamic-component-loader.component.html',
  styleUrls: ['./dynamic-component-loader.component.scss']
})
export class DynamicComponentLoaderComponent implements OnInit {

  @ViewChild(DynamicComponentsRootDirective, {static: true}) dynamicComponentsRoot: DynamicComponentsRootDirective;

  @Input() dynamicComponentConfig: DynamicComponentConfig;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this.loadComponent();
  }

  loadComponent() {
    const componentType = dynamicComponentMap[this.dynamicComponentConfig.type];
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(componentType);
    this.dynamicComponentsRoot.viewContainerRef.clear();
    const componentRef = this.dynamicComponentsRoot.viewContainerRef.createComponent(componentFactory);
    (componentRef.instance as DynamicComponentBase).dynamicComponentConfigs = this.dynamicComponentConfig.content;
  }
}
