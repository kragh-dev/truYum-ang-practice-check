import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IFoodItem } from './food-item-interface';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-item-info',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent implements OnInit {
  @Input('theFoodItem') foodItem:IFoodItem;
  @Output() addToCartRequest: EventEmitter<number> = new EventEmitter<number>()
  constructor(private foodService: FoodService) {}

  ngOnInit() {
    
  }

  onAddToCart(itemId:number){
    this.addToCartRequest.emit(itemId);
  }

}
