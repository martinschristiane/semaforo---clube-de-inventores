def verde():
    pins.digital_write_pin(DigitalPin.P2, 0)
    pins.digital_write_pin(DigitalPin.P1, 1)
def amarelo():
    pins.digital_write_pin(DigitalPin.P1, 0)
    pins.digital_write_pin(DigitalPin.P0, 1)
def vermelho():
    pins.digital_write_pin(DigitalPin.P0, 0)
    pins.digital_write_pin(DigitalPin.P2, 1)

def on_forever():
    verde()
    basic.pause(2000)
    amarelo()
    basic.pause(5000)
    vermelho()
    basic.pause(4000)
basic.forever(on_forever)
