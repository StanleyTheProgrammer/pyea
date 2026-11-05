// watch

radio.setGroup(187)

// pretend thats the light gugugugugugugagagagagagag (turn off)
pins.digitalWritePin(DigitalPin.P1, 0)
basic.showIcon(IconNames.Happy) // Screen icon showing system is armed and ready

radio.onReceivedString(function (receivedString) {
    if (receivedString == "Alert") {
        basic.showIcon(IconNames.Angry)

        // Turn on the wired led maybe
        pins.digitalWritePin(DigitalPin.P1, 1)

        // Lose for the deaf ya phone linging
        for (let i = 0; i < 3; i++) {
            music.ringTone(440)     // 440 hz
            basic.pause(150)        // bruh
            music.rest(100)
        }

        // bye led
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.showIcon(IconNames.Happy)
    }
})
