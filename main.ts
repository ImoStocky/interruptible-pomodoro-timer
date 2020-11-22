let breaker = false
let counter = 0
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    let y: number;
    let x: number;
    
    
    breaker = false
    basic.showNumber(counter)
    basic.clearScreen()
    led.setBrightness(25)
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    for (y = 0; y < 5; y++) {
        for (x = 0; x < 5; x++) {
            if (breaker) {
                break
            }
            
            led.plot(x, y)
            basic.pause(60000)
        }
    }
    led.setBrightness(255)
    basic.pause(100)
    led.setBrightness(25)
    for (y = 0; y < 5; y++) {
        for (x = 0; x < 5; x++) {
            if (breaker) {
                break
            }
            
            led.unplot(4 - x, 4 - y)
            basic.pause(12000)
        }
    }
    if (!breaker) {
        counter += 1
    }
    
    breaker = false
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    breaker = true
    basic.showNumber(counter)
    led.setBrightness(25)
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
})
led.setBrightness(25)
basic.showLeds(`
    . . # . .
    . # . . .
    # # # # #
    . # . . .
    . . # . .
    `)
basic.forever(function on_forever() {
    
})
