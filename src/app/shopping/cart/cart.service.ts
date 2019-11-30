import { Injectable, Output, EventEmitter } from '@angular/core';
import { ICart } from './cart';
import { IFoodItem } from 'src/app/food/item-info/food-item-interface';
import { FoodService } from 'src/app/food/food.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private foodService:FoodService){}
  foodItemList: IFoodItem[] = this.foodService.getFoodItems()
  cart: ICart = {cartItems:[],total:0}
  @Output() cartUpdated = new EventEmitter()
  getCartItems():IFoodItem[]{
    return this.cart.cartItems //should be changed to cart items
  }

  calculateTotal():number{
    let totalValue: number = 0;
    for(let item of this.getCartItems())
    {
      totalValue = totalValue + item.price
    }
    this.cart.total = totalValue
    return this.cart.total
  }

  addToCart(itemId:number){
    if(itemId>0)
    {
      console.log(itemId)
      this.cart.cartItems.push(this.foodService.getFoodItem(itemId))
    }
    else
    {
      console.log(itemId)
    }
  }
  deleteFromCart(itemId:number){
    this.cart.cartItems.splice(this.cart.cartItems.findIndex(item => item.id == itemId),1)
  }
}
