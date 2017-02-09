import { RecipesComponent } from './recipes.component';
import { Ingredient } from './../shared/ingredient';
import { Recipe } from './recipe';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very tasty!',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLx2BZAvwRCeA_aDNWXEgxWoG5InObHMXlReMkTL0mVVPmbtZg',
      [new Ingredient('French Fries', 2), new Ingredient('Pork Meat', 1)]),
    new Recipe('Summer Salad', 'Okayish',
      'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR2qMfEJ9YutlC4WklSZ30Zbgm065I2ZCkrBM6lzQTBxjfBiHx2',
      [new Ingredient('Berries', 2), new Ingredient('Greens', 1)])
  ];
  constructor() { }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }
}
