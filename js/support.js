
documentWidth = window.screen.availWidth;
gridContainerWidth = 0.92 * documentWidth;
cellSideLength = 0.18 * documentWidth;
cellSpace = 0.04 * documentWidth;



function getPosTop(i,j){
    return 20 + i*(20+100);
}

function getPosLeft(i,j){
    return 20 + j*(20+100);
}

function getNumBGCol(num){
    switch(num){
        case 2: return "#eee4da"; break;
        case 4: return "#ede0c8"; break;
        case 8: return "#f2b179"; break;
        case 16: return "#f59563"; break;
        case 32: return "#f67c5f"; break;
        case 64: return "#f65e3b"; break;
        case 128: return "#edcf72"; break;
        case 256: return "#edcc61"; break;
        case 512: return "#edc850"; break;
        case 1024: return "#edc53f"; break;
        case 2048: return "#edc22e"; break;
        case 4096: return "#3c3a32"; break;
        case 8192:return "#3c3a32";break;
    }

    return "black";
}

function getNumCol(num){
    switch(num){
        case 2: return "#776e65"; break;
        case 4: return "#776e65"; break;
        case 8: return "#f9f6f2"; break;
        case 16: return "#f9f6f2"; break;
        case 32: return "#f9f6f2"; break;
        case 64: return "#f9f6f2"; break;
        case 128: return "#f9f6f2"; break;
        case 256: return "#f9f6f2"; break;
        case 512: return "#f9f6f2"; break;
        case 1024: return "#f9f6f2"; break;
        case 2048: return "#f9f6f2"; break;
        case 4096: return "#f9f6f2"; break;
        case 8192: return "#f9f6f2"; break;
    }

    return "white";
}


function nospace(gameBoard){
    for(var i=0; i <4; i++){
        for(var j =0; j<4; j++){
            if(gameBoard[i][j] == 0){
                return false;
            }
        }
    }
    return true;
}


function canMoveLeft(gameBoard){
    for(var i=0; i< 4; i++){
        for(var j=1; j<4; j++){

            if(gameBoard[i][j] != 0){
                if(gameBoard[i][j-1] ==0 || gameBoard[i][j] == gameBoard[i][j-1]){
                    return true;
                }
            }
        }
    }
    return false;
}

function canMoveRight(gameBoard){
    for(var i=0; i< 4; i++){
        for(var j=2; j >=0 ; j--){

            if(gameBoard[i][j] != 0){
                if (gameBoard[i][j + 1] == 0 || gameBoard[i][j + 1] == gameBoard[i][j]){
                    return true;
                }
            }
        }
    }
    return false;
}

function canMoveUp(gameBoard){
    for(var j=0; j< 4; j++){
        for(var i = 1; j < 4 ; i++){

            if(gameBoard[i][j] != 0){
                if (gameBoard[i - 1][j] == 0 || gameBoard[i - 1][j] == gameBoard[i][j]){
                    return true;
                }
            }
        }
    }
    return false;
}


function canMoveDown(gameBoard){
    for(var j=0; j< 4; j++){
        for (var i = 2; i >= 0; i--){
            if(gameBoard[i][j] != 0){
                if (gameBoard[i + 1][j] == 0 || gameBoard[i + 1][j] == gameBoard[i][j]){
                    return true;
                }
            }
        }
    }
    return false;
}

function horBlock(row, col1, col2, gameBoard){
    for(var i =col1+1; i <col2; i++){
        if(gameBoard[row][i] != 0){
            return false;
        }
    }
    return true;
}

function vertBlock(col, row1, row2, gameBoard){
    for(var i = row1+1; i < row2 ; i++){
        if(gameBoard[i][col] != 0){
            return false;
        }
    }
    return true;
}

function nomove(gameBoard){
    if(canMoveDown(gameBoard)||
        canMoveUp(gameBoard)||
        canMoveLeft(gameBoard)||
        canMoveRight(gameBoard)) {
        return false;
    }

    return true;
}




//Animation
function showNum(randX, randY, randNumber){
    var numberCell = $("#number-cell-"+randX+"-"+randY);
    numberCell.css("background-color", getNumBGCol(randNumber));
    numberCell.css("color", getNumCol(randNumber));
    numberCell.text(randNumber);
    numberCell.animate({
        width: 100 ,
        height: 100,
        top: getPosTop(randX,randY),
        left: getPosLeft(randX, randY)
    }, 50);
}

function showMove(fx,fy, tx, ty){
    var numberCell =$("#number-cell-"+fx+"-"+fy);
    numberCell.animate({
        top: getPosTop(tx,ty),
        left: getPosTop(tx,ty)
    },200);

}

function updateScore(score){
    $('#score').text(score);
}