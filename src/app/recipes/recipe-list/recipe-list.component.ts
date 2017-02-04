import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very tasty!', 
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLx2BZAvwRCeA_aDNWXEgxWoG5InObHMXlReMkTL0mVVPmbtZg', 
      []),
    new Recipe('Summer Salad', 'Okayish', 
      'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR2qMfEJ9YutlC4WklSZ30Zbgm065I2ZCkrBM6lzQTBxjfBiHx2', 
      [])
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  //recipe: Recipe = new Recipe('Dummy', 'A recipe for dummies', 'http://media.istockphoto.com/vectors/mannequin-icon-vector-illustration-vector-id531865729?s=235x235', []);
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
