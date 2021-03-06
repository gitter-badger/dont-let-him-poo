import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GameViewComponent } from './game-view/game-view.component';

const featureRoutes: Routes = [
  { path: '', component: GameViewComponent },
  { path: 'rankings', loadChildren: './rankings/rankings.module#RankingsModule' }
];

@NgModule({
  imports: [RouterModule.forChild(featureRoutes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
