input.onButtonPressed(Button.A, function () {
    if (snake.get(LedSpriteProperty.Direction) == 90) {
        snake.turn(Direction.Right, 90)
    } else if (snake.get(LedSpriteProperty.Direction) == 180) {
        snake.turn(Direction.Right, 90)
    } else if (snake.get(LedSpriteProperty.Direction) == -90) {
        snake.turn(Direction.Left, 90)
    } else if (snake.get(LedSpriteProperty.Direction) == 0) {
        snake.turn(Direction.Left, 90)
    }
})
input.onButtonPressed(Button.B, function () {
    if (snake.get(LedSpriteProperty.Direction) == 90) {
        snake.turn(Direction.Left, 90)
    } else if (snake.get(LedSpriteProperty.Direction) == 0) {
        snake.turn(Direction.Right, 90)
    } else if (snake.get(LedSpriteProperty.Direction) == -90) {
        snake.turn(Direction.Right, 90)
    } else if (snake.get(LedSpriteProperty.Direction) == 180) {
        snake.turn(Direction.Left, 90)
    }
    game.resume()
})
function move () {
    if (snake.get(LedSpriteProperty.X) == 4 && snake.get(LedSpriteProperty.Direction) == 90) {
        snake.set(LedSpriteProperty.X, 0)
    } else if (snake.get(LedSpriteProperty.X) == 0 && snake.get(LedSpriteProperty.Direction) == -90) {
        snake.set(LedSpriteProperty.X, 4)
    } else if (snake.get(LedSpriteProperty.Y) == 0 && snake.get(LedSpriteProperty.Direction) == 0) {
        snake.set(LedSpriteProperty.Y, 4)
    } else if (snake.get(LedSpriteProperty.Y) == 4 && snake.get(LedSpriteProperty.Direction) == 180) {
        snake.set(LedSpriteProperty.Y, 0)
    } else {
        snake.move(1)
    }
    if (snake.isTouching(food)) {
        game.addScore(1)
        food.set(LedSpriteProperty.X, randint(0, 4))
        food.set(LedSpriteProperty.Y, randint(0, 4))
    }
    basic.pause(400)
}
let food: game.LedSprite = null
let snake: game.LedSprite = null
snake = game.createSprite(2, 2)
food = game.createSprite(randint(0, 4), randint(0, 4))
food.set(LedSpriteProperty.Brightness, 100)
game.startCountdown(60000)
basic.forever(function () {
    move()
})
