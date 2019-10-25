export function isValid(x) {
    return true;
}

export function hasPiece(x, chess) {
    return true;
}

export function getPossibleMoves(x, chess) {
    return [x.position + 1, x.position - 1];
}