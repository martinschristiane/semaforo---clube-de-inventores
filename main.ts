radio.setGroup(10)
basic.forever(function () {
    radio.sendValue("verde", 1)
    pins.digitalWritePin(DigitalPin.P2, 0)
    // Liga o verde
    pins.digitalWritePin(DigitalPin.P0, 1)
    basic.pause(10000)
    radio.sendValue("verde", 0)
    pins.digitalWritePin(DigitalPin.P0, 0)
    // liga o amarelo
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(5000)
    pins.digitalWritePin(DigitalPin.P1, 0)
    pins.digitalWritePin(DigitalPin.P2, 1)
    basic.pause(4000)
})
