let mySprite = sprites.create(img`
    a a a a 3 3 3 3 3 3 3 1 1 1 1 1 
    a a 3 3 3 3 3 3 3 3 3 3 3 1 1 1 
    a 3 3 3 4 3 3 3 3 3 3 3 3 3 1 1 
    a 3 3 3 4 4 4 4 4 4 3 3 3 3 1 1 
    3 3 3 3 3 3 3 3 3 4 3 3 3 3 3 1 
    3 3 3 3 3 4 3 3 3 3 3 3 3 3 3 1 
    3 3 3 3 3 4 3 3 3 4 3 3 3 3 3 1 
    3 3 3 3 3 4 3 4 3 4 3 3 3 3 3 1 
    3 3 3 3 3 3 3 4 3 3 3 3 3 3 3 1 
    3 3 3 3 3 3 3 4 4 3 3 3 3 3 3 1 
    3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 1 
    1 3 3 3 3 4 4 3 3 3 3 3 3 3 1 1 
    1 3 3 3 4 4 3 3 3 3 3 3 3 3 1 1 
    1 1 3 3 3 3 4 4 4 4 3 3 3 1 1 1 
    1 1 1 1 3 3 3 3 3 3 3 1 1 1 1 1 
    1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
    `, SpriteKind.Player)
let increase = 4
for (let index = 0; index < 10; index++) {
    pause(200)
    mySprite.x += 1 + increase
    pause(200)
    mySprite.y += -2 - increase
    pause(200)
    mySprite.x += 9
    pause(200)
    mySprite.y += -2 - increase
    mySprite.y += 10
    increase += 5
}
