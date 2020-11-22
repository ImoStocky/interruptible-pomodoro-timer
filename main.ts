let breaker = false
let running = false
let counter = 0
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    let y: number;
    let x: number;
    let t: number;
    
    
    
    breaker = false
    running = true
    basic.showNumber(counter)
    basic.clearScreen()
    led.setBrightness(25)
    basic.clearScreen()
    for (y = 0; y < 5; y++) {
        for (x = 0; x < 5; x++) {
            for (t = 0; t < 60; t++) {
                if (breaker) {
                    break
                }
                
                basic.pause(1000)
            }
            led.plot(x, y)
        }
    }
    while (!input.buttonIsPressed(Button.A)) {
        if (breaker) {
            break
        }
        
        led.setBrightness(255)
        basic.pause(1000)
        led.setBrightness(25)
    }
    for (y = 0; y < 5; y++) {
        for (x = 0; x < 5; x++) {
            for (t = 0; t < 12; t++) {
                if (breaker) {
                    break
                }
                
                basic.pause(1000)
            }
            led.unplot(4 - x, 4 - y)
        }
    }
    if (!breaker) {
        counter += 1
    }
    
    breaker = false
    running = false
})
input.onButtonPressed(Button.B, function on_button_pressed_b() {
    
    
    if (running) {
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
let led_enable = true
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
