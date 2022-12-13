input.onButtonPressed(Button.A, function () {
    if (start == 1) {
        if (snake.get(LedSpriteProperty.Direction) == 90) {
            snake.turn(Direction.Right, 90)
        } else if (snake.get(LedSpriteProperty.Direction) == 180) {
            snake.turn(Direction.Right, 90)
        } else if (snake.get(LedSpriteProperty.Direction) == -90) {
            snake.turn(Direction.Left, 90)
        } else if (snake.get(LedSpriteProperty.Direction) == 0) {
            snake.turn(Direction.Left, 90)
        }
    }
})
input.onButtonPressed(Button.B, function () {
    if (start == 1) {
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
    }
})
function move () {
    if (step <= 0) {
        game.addScore(score)
        game.gameOver()
    } else {
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
            score += 1
            step += 6
            speed = speed * 0.96
            food.set(LedSpriteProperty.X, randint(0, 4))
            food.set(LedSpriteProperty.Y, randint(0, 4))
        }
        basic.pause(speed)
        step += -1
    }
}
let score = 0
let step = 0
let food: game.LedSprite = null
let snake: game.LedSprite = null
let start = 0
let speed = 0
speed = 1000
start = 0
snake = game.createSprite(2, 2)
food = game.createSprite(randint(0, 4), randint(0, 4))
food.set(LedSpriteProperty.Brightness, 50)
step = 20
score = 0
basic.forever(function () {
    move()
    if (start == 0) {
        start = 1
    }
})
