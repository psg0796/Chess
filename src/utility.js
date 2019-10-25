/**
 * block -> {name: piece name,
 *  position: position on chess board,
 *  type: 0 for player0 and 1 for player1
 * }
 * an empty block has name = "" and type = 2
 * 
 * chess -> [block] ie., Array of blocks
 */

/**
 * x is index ranging from 0 to 63
 * Should return true if x is found in array of possible moves
 */
export function isValid(x, possibleMoves) {
    return true;
}

/**
 * whether block x has a piece or not
 */
export function hasPiece(x) {
    return true;
}

/**
 * containes index of all possible moves for block x
 */
export function getPossibleMoves(x, chess) {
    return [x.position + 1, x.position - 1];
}

/**
 * playerType: 0 for player0 and 1 for player1
 * should return true if playerType is in check position
 */
export function isPlayerCheck(playerType, chess) {
    return false;
}

/**
 * should return 0 if player0 won the game otherwise return 1 for player1 
 * else return 2 if game isn't over yet
 */
export function gameOver(chess) {
    return 0;
}