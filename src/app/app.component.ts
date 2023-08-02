import { Component } from '@angular/core';
import { ListItemComponent } from './list-item/list-item.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'master-detail-simple';
}
