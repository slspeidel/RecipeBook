import { Component, OnInit, HostListener } from '@angular/core';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnInit {

  constructor(private sls: ShoppingListService) { }

  ngOnInit() {
  }

}
