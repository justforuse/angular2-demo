import {NgModule} from '@angular/core';

import {RouterModule, Routes}   from '@angular/router';
import {AdminComponent} from './admin.component';
import {AdminDashboardComponent} from './admin-dashboard.component';
import {ManageHeroesComponent} from './manage-heroes.component';
import {ManageCrisesComponent} from './manage-crises.component';
import {AuthGuard} from "../auth-guard.service";
const adminRoutes: Routes = [
	{
		path: 'admin',
		component: AdminComponent,
		canActivate:[AuthGuard],
		children: [
			{
				path: "",
				children: [
					{
						path: "crises",
						component: ManageCrisesComponent
					},
					{
						path: "heroes",
						component: ManageHeroesComponent
					},
					{
						path: "",
						component: AdminDashboardComponent
					}
				]

			}

		]
	}
]

@NgModule({
	imports: [
		RouterModule.forChild(adminRoutes)
	],
	exports: [
		RouterModule
	]

})
export class AdminRoutingModule {
}
