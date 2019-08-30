import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appDynamicComponentsRoot]'
})
export class DynamicComponentsRootDirective {

  constructor(public viewContainerRef: ViewContainerRef) {
  }
}
