import { Component, Input, OnInit       } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location                       } from '@angular/common';

import { GoodsService                   } from './goods.service';
import { Good                           } from './good';

import 'rxjs/add/operator/switchMap';

@Component({
	selector: 'my-good-detail',
	styleUrls: ['app/good-detail.component.css'],
	templateUrl: 'app/good-edit.component.html'
})

export class GoodEditComponent {
	good: Good;
	
	constructor(
		private goodsService: GoodsService,
		private route: ActivatedRoute,
		private router: Router,
		private location: Location
	) {
	}
	
	ngOnInit(): void {
		this.route.params
			.switchMap((params: Params) => {
				return params['id']
					? this.goodsService.getGood(+params['id'])
					: this.goodsService.newGood();
			})
			.subscribe((good: Good) => this.good = good);
	}
	
	save(): void {
		this.goodsService.save(this.good);
		this.router.navigate(['/goods/info/'+this.good.id]);
	}
	
	remove(): void {
		this.goodsService
			.remove(this.good)
			.then(() => this.router.navigate(['goods']));
	}
	
	goBack(): void {
		this.location.back();
	}
}
