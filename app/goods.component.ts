import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Good } from './good';
import { GoodsService } from './goods.service';

@Component({
	selector: 'my-goods',
	templateUrl: 'app/goods.component.html',
	styleUrls: ['app/goods.component.css']
})

export class GoodsComponent implements OnInit {
	goods: Good[];
	selectedGood: Good;
	
	constructor(
		private router: Router,
		private goodsService: GoodsService) { }
	
	onSelect(good: Good): void {
		this.selectedGood = good;
	}
	
	gotoDetail(): void {
		this.router.navigate(['/goods',this.selectedGood.id]);
	}
	
	getGood(): void {
		this.goodsService.getGoods().then(goods => goods.find(g => g.id == this.selectedGood.id));
	}
	
	ngOnInit(): void {
		this.goodsService.getGoods().then(goods => this.goods = goods);
	}
}
