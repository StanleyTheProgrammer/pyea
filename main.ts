//foot

let currentDistance = 0
radio.setGroup(187)
let lastDistance = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
)

basic.forever(function () {
    currentDistance = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )
    if (currentDistance > 0) {
        if (lastDistance - currentDistance > 50 && currentDistance < 70) {
            radio.sendString("Alert")
            basic.showString("Sent")
        }
        lastDistance = currentDistance
    }
    basic.pause(100)
})
