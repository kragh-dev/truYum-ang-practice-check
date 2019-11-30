import { Component, OnInit } from '@angular/core';
import { IFoodItem } from 'src/app/food/item-info/food-item-interface'
import { FoodService } from '../food.service';
import { CartService } from 'src/app/shopping/cart/cart.service';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css']
})
export class FoodMenuComponent implements OnInit {
  foodItemList:IFoodItem[]
  filteredFoodItemList:IFoodItem[]
  
  constructor(private foodService: FoodService, private cartService:CartService) { }
  
  ngOnInit() {
    this.foodItemList = this.foodService.getFoodItems()
  }

  addToCart(itemId:number){
    this.cartService.addToCart(itemId)
  }
}
