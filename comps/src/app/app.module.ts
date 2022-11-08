import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElementsModule } from "./elements/elements.module";
import { CollectionsModule } from "./collections/collections.module";
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [  // list of components, pipes, directives that are created in this module
    AppComponent, HomeComponent, NotFoundComponent
  ],
  imports: [     // list of other modules that this module depends upon
    BrowserModule,
    ElementsModule,
    CollectionsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
