import {NgModule} from '@angular/core';
import {DynamicComponentLoaderDirective} from './dynamic-components/dynamic-component-loader/dynamic-component-loader.directive';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [DynamicComponentLoaderDirective],
  exports: [
    DynamicComponentLoaderDirective,
    CommonModule
  ],
  imports: [CommonModule]
})
export class SharedModule {
}
