import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './core/menu/menu.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { SearchInputComponent } from './core/search-input/search-input.component';
import { GroupsComponent } from './core/groups/groups.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UserListComponent,
    SearchInputComponent,
    GroupsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
