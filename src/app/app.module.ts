import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {dynamicComponents} from './types/dynamic-components-union.type';
import {DynamicComponentLoaderDirective} from './dynamic-components/dynamic-component-loader/dynamic-component-loader.directive';

@NgModule({
  declarations: [
    AppComponent,
    ...dynamicComponents,
    DynamicComponentLoaderDirective,
  ],
  entryComponents: [...dynamicComponents],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
