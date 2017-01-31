import { NgModule }              from '@angular/core';
import { BrowserModule }         from '@angular/platform-browser';
import { FormsModule }           from '@angular/forms';

import { AppRoutingModule }      from './app-routing.module';

import { AppComponent }          from './app.component';
import { DashboardComponent }    from './dashboard.component';
import { GoodsComponent }        from './goods.component';
import { GoodDetailComponent }   from './good-detail.component';
import { GoodEditComponent }     from './good-edit.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { GoodsService }          from './goods.service';

@NgModule({
	imports:      [
		BrowserModule,
		FormsModule,
		AppRoutingModule
	],
	declarations: [
		AppComponent,
		DashboardComponent,
		GoodDetailComponent,
		GoodEditComponent,
		PageNotFoundComponent,
		GoodsComponent
	],
	providers: [ GoodsService ],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
