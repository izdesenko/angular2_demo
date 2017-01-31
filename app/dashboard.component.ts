import { Component, OnInit } from '@angular/core';
import { Good }              from './good';
import { GoodsService }      from './goods.service';

@Component({
	moduleId: module.id,
	selector: 'my-dashboard',
	templateUrl: 'dashboard.component.html',
	styleUrls: ['dashboard.component.css']
})

export class DashboardComponent implements OnInit {
	goods: Good[] = [];
	
	constructor(private goodsService: GoodsService) { }
	
	ngOnInit(): void {
		this.goodsService
			.getGoods()
			.then(goods => this.goods = goods.slice(0,4));
	}
}
