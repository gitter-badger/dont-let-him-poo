import { Component, HostListener, Input } from "@angular/core";

import { InteractionService, SalaryService } from "../services/";

import { TILE_TYPES, Node } from "../services/";
import { ChoreographerService } from "../services/choreographer/choreographer.service";
import { GAME_STATES } from "../services/choreographer/choreographer.model";

@Component({
  selector: "dlp-cell-container",
  templateUrl: "./cell-container.component.html",
  styleUrls: ["./cell-container.component.css"]
})
export class CellContainerComponent {
  @Input() node: Node;

  constructor(
    public interactionService: InteractionService,
    private salaryService: SalaryService,
    private choreographerService: ChoreographerService
  ) {}

  @HostListener("mousedown")
  onMouseDown() {
    if (this.choreographerService.currentGameState === GAME_STATES.RUNNING) {
      this.onPointerDown();
    }
  }
  @HostListener("touchstart")
  onTouchStart() {
    if (this.choreographerService.currentGameState === GAME_STATES.RUNNING) {
      this.onPointerDown();
    }

    event.preventDefault();
  }

  private onPointerDown() {
    if (this.node.tileType === TILE_TYPES.NONE) {
      if (
        this.interactionService.selectedTileType !== TILE_TYPES.WALL &&
        this.interactionService.selectedTileType !== TILE_TYPES.NONE
      ) {
        if (
          this.interactionService.remainingQuantity[
            this.interactionService.selectedTileType
          ] > 0
        ) {
          this.node.tileType = this.interactionService.selectedTileType;
          this.interactionService.updateQuantity(
            this.interactionService.selectedTileType
          );

          this.choreographerService.distractionPlaced(this.node);
        }
        this.interactionService.selectedTileType = TILE_TYPES.NONE;
      } else {
        this.interactionService.selectedTileType = this.node.tileType =
          TILE_TYPES.WALL;
        this.choreographerService.checkPathCollision(this.node);
      }
    } else if (this.node.tileType === TILE_TYPES.WALL) {
      if (
        this.interactionService.selectedTileType === TILE_TYPES.WALL ||
        this.interactionService.selectedTileType === TILE_TYPES.NONE
      ) {
        this.interactionService.selectedTileType = this.node.tileType =
          TILE_TYPES.NONE;
      }
    }
  }
}
