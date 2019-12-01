import { Injectable } from '@angular/core';
import { IFoodItem } from './item-info/food-item-interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  foodItems:IFoodItem[] = [
    {id:1,name:"Sandwich",price:99,dateOfLaunch:new Date("15 Mar 2017"),category:"Main Course",active:true,freeDelivery:true,imageUrl:"https://images.unsplash.com/photo-1528735602780-2552fd46c7af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80"},
    {id:2,name:"Pizza",price:129,dateOfLaunch:new Date("15 Mar 2019"),category:"Main Course",active:true,freeDelivery:true,imageUrl:"https://images.unsplash.com/photo-1551782450-a2132b4ba21d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"},
  ]

  getFoodItems():IFoodItem[]{
    return this.foodItems
  }

  foodFilter = new Subject();

  getFoodFilter():Subject<Object>{
    return this.foodFilter
  }

  getFoodItem(itemId:number):IFoodItem{
    return this.foodItems[this.foodItems.findIndex(item => item.id == itemId)]
  }

  updateFoodItem(foodItem:IFoodItem){
    let itemIndex:number = this.foodItems.findIndex(item => item.id == foodItem.id)
    this.foodItems[itemIndex] = foodItem
  }
}
