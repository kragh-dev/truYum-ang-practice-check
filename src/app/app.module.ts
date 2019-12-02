import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodItemComponent } from './food/item-info/food-item.component';
import { FoodMenuComponent } from './food/menu/food-menu.component';
import { FoodSearchComponent } from './food/search/food-search.component';
import { CartComponent } from './shopping/cart/cart.component';
import { RouterModule } from '@angular/router';
import { FoodItemEditComponent } from './food/item-edit/food-item-edit.component';
import { LoginComponent } from './site/login/login.component';
import { SignupComponent } from './site/signup/signup.component';
import { HeaderComponent } from './site/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodItemComponent,
    FoodMenuComponent,
    FoodSearchComponent,
    CartComponent,
    FoodItemEditComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'menu',component:FoodMenuComponent},
      {path:'cart',component:CartComponent},
      {path:'edit/:id',component:FoodItemEditComponent},
      {path:'login',component:LoginComponent},
      {path:'signup',component:SignupComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }