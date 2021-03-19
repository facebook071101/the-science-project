input.onButtonPressed(Button.A, function () {
    The_situation = 1
    basic.showNumber(The_number_of_1_dollar_coins)
})
input.onButtonPressed(Button.AB, function () {
    The_situation = 4
    basic.showNumber(The_total_amount_of_coins)
})
input.onButtonPressed(Button.B, function () {
    The_situation = 2
    basic.showNumber(The_number_of_5_dollars_coins)
})
input.onGesture(Gesture.Shake, function () {
    The_situation = 3
    basic.showNumber(The_total_amount_of_coins)
})
let The_IRSensor = 0
let The_total_amount_of_coins = 0
let The_situation = 0
let The_number_of_5_dollars_coins = 0
let The_number_of_1_dollar_coins = 0
The_number_of_1_dollar_coins = 0
The_number_of_5_dollars_coins = 0
The_situation = 0
basic.forever(function () {
    The_IRSensor = pins.analogReadPin(AnalogPin.P1)
    if (The_IRSensor < 50) {
        if (The_situation == 1) {
            The_number_of_1_dollar_coins += 1
            basic.showNumber(The_number_of_1_dollar_coins)
        } else {
            if (The_situation == 2) {
                The_number_of_5_dollars_coins += 1
                basic.showNumber(The_number_of_5_dollars_coins)
            }
        }
    } else {
        if (The_situation == 3) {
            The_total_amount_of_coins = The_number_of_1_dollar_coins + The_number_of_5_dollars_coins * 5
            if (The_total_amount_of_coins < 10) {
                basic.showNumber(The_total_amount_of_coins)
                basic.pause(1000)
                basic.showString("Too little")
                basic.pause(1000)
                basic.showIcon(IconNames.Sad)
            } else {
                if (The_total_amount_of_coins >= 10 && The_total_amount_of_coins < 20) {
                    basic.showNumber(The_total_amount_of_coins)
                    basic.pause(1000)
                    basic.showIcon(IconNames.Asleep)
                } else {
                    if (The_total_amount_of_coins >= 16 && The_total_amount_of_coins < 20) {
                        basic.showNumber(The_total_amount_of_coins)
                        basic.pause(1000)
                        basic.showString("Good")
                        basic.pause(1000)
                        basic.showIcon(IconNames.Happy)
                    } else {
                        if (The_total_amount_of_coins >= 20 && The_total_amount_of_coins < 30) {
                            basic.showNumber(The_total_amount_of_coins)
                            basic.pause(1000)
                            basic.showString("Very good")
                            basic.pause(1000)
                            basic.showIcon(IconNames.Heart)
                        } else {
                            if (The_total_amount_of_coins >= 30) {
                                basic.showNumber(The_total_amount_of_coins)
                                basic.pause(1000)
                                basic.showString("Excellent")
                                basic.pause(1000)
                                basic.showIcon(IconNames.Happy)
                                basic.pause(1000)
                                basic.showIcon(IconNames.Heart)
                            }
                        }
                    }
                }
            }
        }
        if (The_situation == 4) {
            The_total_amount_of_coins = 0
            The_number_of_1_dollar_coins = 0
            The_number_of_5_dollars_coins = 0
            basic.showNumber(The_total_amount_of_coins)
        }
    }
})
