$(document).keydown(function(event){
    switch(event.keyCode){
        case 65:  // left
            if(moveleft()){
                setTimeout("generateOneNum()", 210);
                setTimeout("isGameOver()", 300);
            }
            break;

        case 87:  //up
            if(moveUp()){
                setTimeout("generateOneNum()", 210);
                setTimeout("isGameOver()", 300);
            }
            break;

        case 68:  //right
            if(moveRight()){
                setTimeout("generateOneNum()", 210);
                setTimeout("isGameOver()", 300);
            }
            break;

        case 83:   //down
            if(moveDown()){
                setTimeout("generateOneNum()", 210);
                setTimeout("isGameOver()", 300);
            }
            break;

        default:
            break;
    }
});

document.addEventListener('touchstart',function(event){
    startx = event.touches[0].pageX;
    starty = event.touches[0].pageY;
});

document.addEventListener('touchmove',function(event){
    event.preventDefault();
});

document.addEventListener('touchend',function(event){
    endx = event.changedTouches[0].pageX;
    endy = event.changedTouches[0].pageY;

    var deltax = endx - startx;
    var deltay = endy - starty;

    if ( Math.abs( deltax ) < 0.3 * documentWidth && Math.abs( deltay ) < 0.3 * documentWidth )
        return;

    if ( Math.abs(deltax) >= Math.abs(deltay) ) {
        if ( deltax > 0 ) {
            //move right
            if (moveRight()) {
                setTimeout("generateOneNumber()", 210);
                setTimeout("isGameOver()", 300);
            }
        }
        else{
            //move left
            if (moveLeft()) {
                setTimeout("generateOneNumber()", 210);
                setTimeout("isGameOver()", 300);
            }
        }
    }
    //y
    else {

        if ( deltay > 0 ){
            //move down
            if (moveDown()) {
                setTimeout("generateOneNumber()", 210);
                setTimeout("isGameOver()", 300);
            }
        }
        else{
            //move up
            if (moveUp()) {
                setTimeout("generateOneNumber()", 210);
                setTimeout("isGameOver()", 300);
            }
        }
    }
});

function isGameOver(){
    if(nospace(gameBoard) && nomove(gameBoard)){
        gameOver();
    }
}

function gameOver(){
    alert("Game Over!");
}

function moveleft(){
    if(! canMoveLeft(gameBoard)){
        return false;
    }

    for(var i=0; i< 4; i++){
        for(var j=1; j<4; j++){
            if( gameBoard[i][j] != 0 ){
                for(var k = 0; k<j; k++) {
                    if (gameBoard[i][k] == 0 && horBlock(i, k, j, gameBoard)) {
                        showMove(i, j, i, k);
                        gameBoard[i][k] = gameBoard[i][j];
                        gameBoard[i][j] = 0;
                    } else if (gameBoard[i][k] == gameBoard[i][j] && horBlock(i, k, j, gameBoard) && !hasConflicted[i][k]) {
                        showMove(i, j, i, k);
                        gameBoard[i][k] += gameBoard[i][j];
                        gameBoard[i][j] = 0;
                        score += gameBoard[i][k];
                        updateScore(score);
                        hasConflicted[i][k] = true;
                        continue;
                    }
                }
            }
        }
    }

    setTimeout("updateGameView()",200);
    return true;
}

function moveRight(){
    if(!canMoveRight(gameBoard)){
        return false;
    }

    for( var i = 0 ; i < 4 ; i ++ ) {
        for (var j = 2; j >= 0; j--) {
            if( gameBoard[i][j] != 0 ){

                for( var k = 3 ; k > j ; k -- ){
                    if (gameBoard[i][k] == 0 && horBlock(i, k, j, gameBoard)) {
                        showMove(i,j,i,k);
                        gameBoard[i][k] = gameBoard[i][j];
                        gameBoard[i][j] = 0;
                    } else if (gameBoard[i][k] == gameBoard[i][j] && horBlock(i, k, j, gameBoard) && !hasConflicted[i][k]) {
                        showMove(i, j, i, k);
                        gameBoard[i][k] += gameBoard[i][j];
                        gameBoard[i][j] = 0;
                        score += gameBoard[i][k];
                        updateScore(score);
                        hasConflicted[i][k] = true;
                        continue;
                    }
                }
            }

        }
    }

    setTimeout("updateGameView()",200);
    return true;
}

function moveUp(){
    if(!canMoveUp(gameBoard)){
        return false;
    }

    for( var j = 0 ; j < 4 ; j ++ ){
        for( var i = 1 ; i < 4 ; i ++ ){
            if( gameBoard[i][j] != 0 ) {
                for( var k = 0 ; k < i ; k ++ ){
                    if( gameBoard[k][j] == 0 && vertBlock( j , k , i , gameBoard ) ){
                        showMove(i,j,k,j);
                        gameBoard[k][j] = gameBoard[i][j];
                        gameBoard[i][j] = 0;
                        continue;
                    } else if(gameBoard[k][j] == gameBoard[i][j] && vertBlock( j , k , i , gameBoard ) && !hasConflicted[k][j]){
                        showMove(i,j,k,j);
                        gameBoard[k][j] += gameBoard[i][j];
                        gameBoard[i][j] = 0;

                        score += gameBoard[k][j];
                        updateScore(score);
                        hasConflicted[k][j] = true;
                        continue;
                    }
                }
            }
        }
    }
    setTimeout("updateGameView()",200);
    return true;
}

function moveDown(){
    if(!canMoveDown(gameBoard)){
        return false;
    }

    for( var j = 0 ; j < 4 ; j ++ ){
        for( var i = 2 ; i >= 0 ; i -- ){
            if( gameBoard[i][j] != 0 ) {

                for (var k = 3; k > i; k--) {
                    if (gameBoard[k][j] == 0 && vertBlock(j, i, k, gameBoard)) {
                        showMove(i, j, k, j);
                        gameBoard[k][j] = gameBoard[i][j];
                        gameBoard[i][j] = 0;
                        continue;
                    } else if( gameBoard[k][j] == gameBoard[i][j] && vertBlock( j , i , k , gameBoard ) && !hasConflicted[k][j] ){
                        showMove(i,j,k,j);
                        gameBoard[k][j] += gameBoard[i][j];
                        gameBoard[i][j] = 0;

                        score += gameBoard[k][j];
                        updateScore(score);
                        hasConflicted[k][j] = true;
                        continue;
                    }
                }
            }
        }
    }
    setTimeout("updateGameView()",200);
    return true;
}