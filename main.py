breaker = False
counter = 0

def on_button_pressed_a():
    global breaker
    global counter
    breaker = False;
    basic.show_number(counter)
    basic.clear_screen()

    led.set_brightness(25)
    basic.show_leds("""
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        """)    
    for y in range(5):
        for x in range(5):
            if breaker:
                break

            led.plot(x, y)
            basic.pause(60000)                
    
    led.set_brightness(255)
    basic.pause(100)
    led.set_brightness(25)

    for y in range(5):
        for x in range(5):
            if breaker:
                break
            
            led.unplot(4-x, 4-y)
            basic.pause(12000)

    if not breaker:
        counter+=1

    breaker=False

input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global breaker
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
