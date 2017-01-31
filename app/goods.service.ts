import { Injectable } from '@angular/core';
import { Good } from './good';
import { GOODS } from './mock-goods';

@Injectable()
export class GoodsService {
	getGoods(): Promise<Good[]> {
		let gg: any = localStorage.getItem('Goods');
		if(!gg){
			gg = GOODS;
			this.updateGoods(gg);
		}else{
			gg = JSON.parse(gg);
		}
		
		gg = gg || [];
		
		return Promise.resolve(gg.filter((g:Good) => g));
	};
	
	getGood(id: number): Promise<Good> {
		return this
			.getGoods()
			.then(goods => {
				let g: Good = goods.find((g:Good) => g.id === id);
				return g;
			})
	}
	
	newGood(): Promise<Good> {
		return this
			.getGoods()
			.then(goods => goods.sort((a,b) => b.id - a.id)[0])
			.then((good:Good) => new Good('',0.00,good.id + 1,new Date))
	}
	
	save(good:Good): Promise<void> {
		return this
			.getGoods()
			.then(goods => {
				let idx: number;
				let oldGood: Good = goods.find(
					(g:Good,i:number) => {
						if(g.id == good.id){
							idx = i;
							return true;
						}
					});
				if(oldGood){
					goods[idx] = good;
				}else{
					goods.push(good);
				}
				return this.updateGoods(goods);
			});
	}
	
	remove(good:Good): Promise<Good[]> {
		return this
			.getGoods()
			.then(goods => {
				let idx: number;
				let oldGood: Good = goods.find(
					(g:Good,i:number) => {
						if(g.id == good.id){
							idx = i;
							return true;
						}
					});
				if(oldGood){
					goods.splice(idx,1);
				}
				return this.updateGoods(goods);
			});
	}
	
	updateGoods(goods:Good[]): Good[] {
		let s:string = JSON.stringify(goods);
		localStorage.setItem('Goods',s);
		
		return goods;
	}
}
