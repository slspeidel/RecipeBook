export class Ingredient {
  name: string;
  amount: number;
  constructor(public itemName: string, public itemAmount: number) {
    this.name = itemName;
    this.amount = itemAmount;
  }
}
