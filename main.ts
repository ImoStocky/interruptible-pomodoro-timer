let breaker = false
let running = false
let counter = 0
let led_enable = true
let on_pause = false
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    let y: number;
    let x: number;
    let t: number;
    
    
    
    
    breaker = false
    running = true
    basic.showNumber(counter)
    led.setBrightness(25)
    basic.clearScreen()
    for (y = 0; y < 5; y++) {
        for (x = 0; x < 5; x++) {
            for (t = 0; t < 60; t++) {
                if (breaker) {
                    break
                }
                
                basic.pause(1000)
                led.toggle(x, y)
            }
            led.plot(x, y)
        }
    }
    if (!breaker) {
        counter += 1
        on_pause = true
    }
    
    while (on_pause && !breaker) {
        led.setBrightness(255)
        basic.pause(1000)
        led.setBrightness(25)
        basic.pause(1000)
    }
    for (y = 0; y < 5; y++) {
        for (x = 0; x < 5; x++) {
            for (t = 0; t < 12; t++) {
                if (breaker) {
                    break
                }
                
                basic.pause(1000)
                led.toggle(4 - x, 4 - y)
            }
            led.unplot(4 - x, 4 - y)
        }
    }
    if (!breaker) {
        basic.showNumber(counter)
        led.setBrightness(25)
        basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    }
    
    on_pause = false
    breaker = false
    running = false
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    
    
    if (running && on_pause) {
        on_pause = false
        return
    } else if (running) {
        breaker = true
    }
    
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
input.onButtonPressed(Button.AB, function on_button_pressed_ab() {
    
    led.enable(!led_enable)
    led_enable = !led_enable
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
