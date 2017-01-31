import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { GoodsService }             from './goods.service';
import { Good }                     from './good';

import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'my-good-detail',
	styleUrls: ['app/good-detail.component.css'],
	templateUrl: 'app/good-detail.component.html',
})

export class GoodDetailComponent implements OnInit {
	good: Good;
	
	constructor(
		private goodsService: GoodsService,
		private route: ActivatedRoute,
		private location: Location
	) {}
	
	ngOnInit(): void {
		this.route.params
			.switchMap((params: Params) => this.goodsService.getGood(+params['id']))
			.subscribe((good: Good) => this.good = good);
	}
	
	goBack(): void {
		this.location.back();
	}
}
