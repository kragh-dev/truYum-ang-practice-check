import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IFoodItem } from '../item-info/food-item-interface';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-item-edit',
  templateUrl: './food-item-edit.component.html',
  styleUrls: ['./food-item-edit.component.css']
})
export class FoodItemEditComponent implements OnInit {
  foodItem: IFoodItem
  itemId: number
  constructor(private activatedRoute:ActivatedRoute, private foodService:FoodService) { }

  ngOnInit() {
    this.itemId = this.activatedRoute.snapshot.params['id'] as number
    this.foodItem = this.foodService.getFoodItem(this.itemId)
    console.log(this.foodItem)
  }

  updateFoodItem(name:string,price:number,dateOfLaunch:Date,category:string,active:boolean,freeDelivery:boolean)
  {
    this.foodItem.name = name
    this.foodItem.price = price
    this.foodItem.dateOfLaunch = dateOfLaunch
    this.foodItem.category = category
    if(active == true)
    this.foodItem.active = true
    else
    this.foodItem.active = false
    
    this.foodItem.freeDelivery = freeDelivery
    this.foodService.updateFoodItem(this.foodItem)
  }

  getItemName()
  {
    return this.foodItem.name
  }
}
