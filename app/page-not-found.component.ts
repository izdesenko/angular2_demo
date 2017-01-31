import { Component } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'ev-404',
	template: `
		<article class="not_found">
		<h4>Not found!</h4>
		<div>Requested content not found</div>
		</article>
	`
})
export class PageNotFoundComponent { }

