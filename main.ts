let hoogste_temperatuur = -1000
let laagste_temperatuur = 1000
basic.forever(function () {
    if (input.temperature() > hoogste_temperatuur) {
        hoogste_temperatuur = input.temperature()
    }
    if (input.temperature() < laagste_temperatuur) {
        laagste_temperatuur = input.temperature()
    }
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(hoogste_temperatuur)
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showNumber(laagste_temperatuur)
    } else {
        basic.showNumber(input.temperature())
    }
})
