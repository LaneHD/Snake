var checkCollision = function(x, y, array) {
    for(var i = 0; i < array.length; i++) {
        if(array[i].x === x && array[i].y === y)
        return true;
    } 
    return false;
}
if (direction == 'right') {
    snakeX++;
} else if (direction == 'left') {
    snakeX--;
} else if (direction == 'up') {
    snakeY--;
} else if (direction == 'down') {
    snakeY++;
}
     /*
    If the snake touches the canvas path or itself, it will die!
    Therefore if x or y of an element of the snake, don't fit inside the canvas, the game will be stopped.
    If the check_collision is true, it means the the snake has crashed on its body itself, then the game will be stopped again. 
    */
if (snakeX == -1 || snakeX == w / snakeSize || snakeY == -1 || snakeY == h / snakeSize || check_collision(snakeX, snakeY, snake)) {
    //Stop the game.
    //Make the start button enabled again.
    btn.removeAttribute('disabled', true);
    //Clean up the canvas.
    ctx.clearRect(0, 0, w, h);
    gameloop = clearInterval(gameloop);
    return;
}
	//If the snake eats food it becomes longer and this means that, in this case, you shouldn't pop out the last element of the array.
if (snakeX == food.x && snakeY == food.y) {
    //Create a new square instead of moving the tail.
    var tail = {
        x: snakeX,
        y: snakeY
    };
    score++;
    //Create new food.
    createFood();
} else {
    //Pop out the last cell.
    var tail = snake.pop();
    tail.x = snakeX;
    tail.y = snakeY;
}
	//Puts the tail as the first cell.
snake.unshift(tail);
	//For each element of the array create a square using the bodySnake function we created before.
for (var i = 0; i < snake.length; i++) {
    bodySnake(snake[i].x, snake[i].y);
}
	//Create food using the _pizza_ function.
pizza(food.x, food.y);
	//Put the score text.
scoreText();
}