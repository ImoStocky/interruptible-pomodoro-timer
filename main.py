breaker = False
running = False
counter = 0

def on_button_pressed_a():
    global breaker
    global counter
    global running
    breaker = False;
    running = True
    basic.show_number(counter)
    basic.clear_screen()

    led.set_brightness(25)

    basic.clear_screen()
  
    for y in range(5):
        for x in range(5):
            for t in range(60):
                if breaker:
                    break
                basic.pause(1000)  
                led.toggle(x, y)
            led.plot(x, y)              
    
    while(not input.button_is_pressed(Button.A)):
        if breaker:
            break

        led.set_brightness(255)
        basic.pause(1000)
        led.set_brightness(25)

    for y in range(5):
        for x in range(5):         
            for t in range(12):
                if breaker:
                    break
                basic.pause(1000)
                led.toggle(x, y)
            led.unplot(4-x, 4-y)


    if not breaker:
        counter+=1

    breaker=False
    running=False

input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global breaker
    global running
    if running:
        breaker = True

    basic.show_number(counter)

    led.set_brightness(25)
    basic.show_leds("""
    . . # . .
    . # . . .
    # # # # #
    . # . . .
    . . # . .
    """)

input.on_button_pressed(Button.B, on_button_pressed_b)

led_enable = True

def on_button_pressed_ab():
    global led_enable
    led.enable(not led_enable)
    led_enable = not led_enable


input.on_button_pressed(Button.AB, on_button_pressed_ab)

led.set_brightness(25)
basic.show_leds("""
    . . # . .
    . # . . .
    # # # # #
    . # . . .
    . . # . .
    """)

def on_forever():
    pass

basic.forever(on_forever)
