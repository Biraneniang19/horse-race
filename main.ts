gax-java/pom.xml
namespace SpriteKind {
    export const Finish = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Finish, function (sprite, otherSprite) {
    carnival.onGameOverExpanded(winTypes.Multi)
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    myHorse2.x += 1.5
    myHorse2.startEffect(effects.hearts, 100)
    info.player2.changeScoreBy(1)
})
controller.player4.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    myHorse4.x += 1.5
    myHorse4.startEffect(effects.fountain, 100)
    info.player4.changeScoreBy(1)
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    myHorse1.x += 1.5
    myHorse1.startEffect(effects.spray, 100)
    info.player1.changeScoreBy(1)
})
controller.player3.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    myHorse3.x += 1.5
    myHorse3.startEffect(effects.confetti, 100)
    info.player3.changeScoreBy(1)
})
let myHorse4: Sprite = null
let myHorse3: Sprite = null
let myHorse2: Sprite = null
let myHorse1: Sprite = null
scene.setBackgroundColor(1)
scene.setBackgroundImage(assets.image`bgFrame`)
myHorse1 = sprites.create(img`
    ........................bc....
    ......................bcccc...
    ......................cccccc..
    ....................cccccccc..
    .........cccccb....cccccccccc.
    .......bccccccccccccccccc.bccc
    .....ccccccccccccccccccc...bbc
    ...bccbcccccccccccccccc.......
    ccccc...ccccccccccccccb.......
    .ccc....bcccccccccccccc.......
    .........bccc..ccccccccc......
    ..........ccc....cccccccc.....
    ..........bccc.....ccc..bc....
    ..........cbcc......cc...cb...
    ..........b.bcc...ccc....bcb..
    ..............cc..bc..........
    `, SpriteKind.Player)
myHorse1.setPosition(20, 15)
myHorse2 = sprites.create(img`
    ........................42....
    ......................42222...
    ......................222222..
    ....................22222222..
    .........222224....2222222222.
    .......422222222222222222.4222
    .....2222222222222222222...442
    ...42242222222222222222.......
    22222...222222222222224.......
    .222....422222222222222.......
    .........4222..222222222......
    ..........222....22222222.....
    ..........4222.....222..42....
    ..........2422......22...24...
    ..........4.422...222....424..
    ..............22..42..........
    `, SpriteKind.Player)
myHorse2.setPosition(20, 34)
myHorse3 = sprites.create(img`
    ........................67....
    ......................67777...
    ......................777777..
    ....................77777777..
    .........777776....7777777777.
    .......677777777777777777.6777
    .....7777777777777777777...667
    ...67767777777777777777.......
    77777...777777777777776.......
    .777....677777777777777.......
    .........6777..777777777......
    ..........777....77777777.....
    ..........6777.....777..67....
    ..........7677......77...76...
    ..........6.677...777....676..
    ..............77..67..........
    `, SpriteKind.Player)
myHorse3.setPosition(20, 57)
myHorse4 = sprites.create(img`
    ........................54....
    ......................54444...
    ......................444444..
    ....................44444444..
    .........444445....4444444444.
    .......544444444444444444.5444
    .....4444444444444444444...554
    ...54454444444444444444.......
    44444...444444444444445.......
    .444....544444444444444.......
    .........5444..444444444......
    ..........444....44444444.....
    ..........5444.....444..54....
    ..........4544......44...45...
    ..........5.544...444....545..
    ..............44..54..........
    `, SpriteKind.Player)
myHorse4.setPosition(20, 77)
let finish = sprites.create(assets.image`finish`, SpriteKind.Finish)
finish.setPosition(150, 50)
let textSprite2 = textsprite.create("Horse Race")
textSprite2.setPosition(80, 108)
