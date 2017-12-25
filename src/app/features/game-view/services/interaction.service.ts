import { Injectable } from "@angular/core";

import { TILE_TYPES } from "./grid/grid.model";

import { PLAYER_MOVES } from "./choreographer/choreographer.model";

@Injectable()
export class InteractionService {
  remainingQuantity = {
    pizza: 5,
    money: 5
  };

  playerMoves: PLAYER_MOVES = PLAYER_MOVES.NORMAL;

  selectedTileType: string = TILE_TYPES.NONE;

  updateQuantity(tileType) {
    if (this.remainingQuantity[tileType] > 0) {
      this.remainingQuantity[tileType]--;
    }
  }
}
