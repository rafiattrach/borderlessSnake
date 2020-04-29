class Element {

    shape
    x
    y

    constructor(shape, x, y) {
        this.shape = shape
        this.x = x
        this.y = y
        this.shape.style.left = x + "px"
        this.shape.style.top = y + "px"
    }
}

class Food extends Element {


    constructor(shape, x, y) {
        super(shape, x, y)
    }

    respawn() {
        this.x = getRandomPosition(window.innerWidth - 20)
        this.y = getRandomPosition(window.innerHeight - 20)
        this.shape.style.left = this.x + "px"
        this.shape.style.top = this.y + "px"
    }
}

class Player extends Element {

    constructor(shape, x, y) {
        super(shape, x, y)
    }

    teleport(position) {
        switch (position) {
            case "up": {
                this.y = 0
                this.shape.style.top = this.y + "px"
                break
            }
            case "down": {
                this.y = window.innerHeight - window.innerHeight % 20
                this.shape.style.top = this.y + "px"
                break
            }
            case "left": {
                this.x = 0
                this.shape.style.left = this.x + "px"
                break
            }
            case "right": {
                this.x = window.innerWidth - window.innerWidth % 20
                this.shape.style.left = this.x + "px"
                break
            }



        }

    }

    moveUp() {
        this.y -= 20;
        this.shape.style.top = this.y + "px"
    }
    moveDown() {
        this.y += 20;
        this.shape.style.top = this.y + "px"
    }
    moveLeft() {
        this.x -= 20;
        this.shape.style.left = this.x + "px"
    }
    moveRight() {
        this.x += 20;
        this.shape.style.left = this.x + "px"
    }
}


function getRandomPosition(windowInnerWidth) {
    let position = Math.round(Math.random() * windowInnerWidth)
    return position - position % 20
}


let player = new Player(
    document.getElementById("player"),
    getRandomPosition(window.innerWidth - 20),
    getRandomPosition(window.innerHeight - 20)
)

let food = new Food(
    document.getElementById("food"),
    getRandomPosition(window.innerWidth - 20),
    getRandomPosition(window.innerHeight - 20)
)



window.addEventListener("keydown", el => {
    switch (el.which) {
        case 37: {
            if (player.x > 0)
                player.moveLeft()
            else
                player.teleport("right")
            break
        }
        case 38: {
            if (player.y > 0)
                player.moveUp()
            else
                player.teleport("down")
            break
        }
        case 39: {
            if (player.x < window.innerWidth)
                player.moveRight()
            else
                player.teleport("left")
            break
        }
        case 40: {
            if (player.y < window.innerHeight)
                player.moveDown()
            else
                player.teleport("up")
            break
        }
    }
    if (player.x === food.x && player.y === food.y) {
        alert("nice one bro")
        food.respawn()
    }

})