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
    this.itemId = this.activatedRoute.snapshot.params['id']
    this.foodItem = this.foodService.getFoodItem(this.itemId)
  }

  updateFoodItem(name:string)
  {
    this.foodItem.name = name
    this.foodService.updateFoodItem(this.foodItem)
  }
}
