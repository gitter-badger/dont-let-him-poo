import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

// Routing Module
import { FeaturesRoutingModule } from "./features-routing.module";
import {} from "./rankings/rankings-routing.module";

import { SharedModule } from "../shared/shared.module";

// Components & Services
import {
  GameViewComponent,
  GridContainerComponent,
  CellContainerComponent,
  TrashCanComponent,
  SalaryGaugeComponent,
  GridCreationService,
  InteractionService,
  SalaryService
} from "./game-view";

@NgModule({
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  declarations: [
    GameViewComponent,
    GridContainerComponent,
    CellContainerComponent,
    TrashCanComponent,
    SalaryGaugeComponent
  ],
  providers: [GridCreationService, InteractionService, SalaryService]
})
export class FeaturesModule {}
