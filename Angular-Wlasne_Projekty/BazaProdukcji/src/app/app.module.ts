import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { MainViewComponent } from './main-view/main-view.component';
import { FooterComponent } from './footer/footer.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { ContainerComponent } from './container/container.component';
import { DataModuleComponent } from './data-module/data-module.component';
import { SmallTopMenuComponent } from './small-top-menu/small-top-menu.component';
import { DataTableComponent } from './data-table/data-table.component';
import { LeftMenuButtonComponent } from './left-menu-button/left-menu-button.component';
import { SmallTopMenuButtonComponent } from './small-top-menu-button/small-top-menu-button.component';
import { TopMenuButtonComponent } from './top-menu-button/top-menu-button.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    MainViewComponent,
    FooterComponent,
    TopMenuComponent,
    LeftMenuComponent,
    ContainerComponent,
    DataModuleComponent,
    SmallTopMenuComponent,
    DataTableComponent,
    LeftMenuButtonComponent,
    SmallTopMenuButtonComponent,
    TopMenuButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
