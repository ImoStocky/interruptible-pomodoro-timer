breaker = False
running = False
counter = 0
led_enable = True
on_pause = False


def on_button_pressed_a():
    global breaker
    global counter
    global running
    global on_pause

    breaker = False
    running = True

    basic.show_number(counter)

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
    
    if not breaker:
        counter+=1
        on_pause = True

    while(on_pause and not breaker):
        
        led.set_brightness(255)
        basic.pause(1000)
        led.set_brightness(25)
        basic.pause(1000)

    for y in range(5):
        for x in range(5):         
            for t in range(12):
                if breaker:
                    break
                basic.pause(1000)
                led.toggle(4-x, 4-y)
            led.unplot(4-x, 4-y)

    if not breaker:

        basic.show_number(counter)

        led.set_brightness(25)
        basic.show_leds("""
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        """)

    on_pause=False
    breaker=False
    running=False

input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global breaker
    global running
    global on_pause
    if running and on_pause:
        on_pause = False
        return 
    elif running:
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

