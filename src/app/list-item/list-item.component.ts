import { Component } from '@angular/core';
import { ITEMS } from '../mock-item-list';
import { Item } from '../item.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent {
  itemList: Item[] = ITEMS;
  itemSelected: Item | undefined;

  constructor(private router: Router) {}

  goToItem(item: Item) {
    this.router.navigate(['/item', item.id]);
  }
}
