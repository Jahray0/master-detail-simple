import { Component, OnInit } from '@angular/core';
import { ITEMS } from '../mock-item-list';
import { Item } from '../item.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.scss'],
})
export class DetailItemComponent implements OnInit {
  itemList: Item[] = ITEMS;
  item: Item | undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.itemList = ITEMS;
    const itemId: string | null = this.route.snapshot.paramMap.get('id');
    if (itemId) {
      this.item = this.itemList.find((item) => item.id === +itemId);
    }
  }

  goToItemList() {
    this.router.navigate(['/item']);
  }
}
