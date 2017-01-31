import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { DashboardComponent }    from './dashboard.component';
import { GoodsComponent }        from './goods.component';
import { GoodEditComponent  }    from './good-edit.component';
import { GoodDetailComponent }   from './good-detail.component';
import { PageNotFoundComponent } from './page-not-found.component';

const appRoutes: Routes = [
	{ path: '',               component: DashboardComponent    },
	{ path: 'goods',          component: GoodsComponent        },
	{ path: 'goods/new',      component: GoodEditComponent     },
	{ path: 'goods/edit/:id', component: GoodEditComponent     },
	{ path: 'goods/info/:id', component: GoodDetailComponent   },
	{ path: '**',             component: PageNotFoundComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(appRoutes) ],
	exports: [ RouterModule ]
})

export class AppRoutingModule {}
