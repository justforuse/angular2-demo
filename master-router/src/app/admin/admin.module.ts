import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AdminDashboardComponent} from './admin-dashboard.component';
import {AdminComponent} from './admin.component';
import {ManageHeroesComponent} from './manage-heroes.component';
import {ManageCrisesComponent} from './manage-crises.component';


import {AdminRoutingModule} from './admin-routing.module';

@NgModule({
	imports: [
		AdminRoutingModule,
		CommonModule
	],
	exports: [],
	declarations: [
		AdminComponent,
		AdminDashboardComponent,
		ManageHeroesComponent,
		ManageCrisesComponent
	],
	providers: [],
})
export class AdminModule {
}
