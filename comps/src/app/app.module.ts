import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElementsModule } from "./elements/elements.module";
import { CollectionsModule } from "./collections/collections.module";

@NgModule({
  declarations: [  // list of components, pipes, directives that are created in this module
    AppComponent
  ],
  imports: [     // list of other modules that this module depends upon
    BrowserModule,
    AppRoutingModule,
    ElementsModule,
    CollectionsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
