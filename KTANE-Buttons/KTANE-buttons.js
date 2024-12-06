var num_of_batteries = 0
var car_lit = false
var frk_lit = false

var red_abort = document.getElementById('red-abort')
var red_detonate = document.getElementById('red-detonate')
var red_hold = document.getElementById('red-hold')
var red_press = document.getElementById('red-press')

red_abort.onclick = () => button_selector(['red', 'abort'])
red_detonate.onclick = () => button_selector(['red', 'detonate'])
red_hold.onclick = () => button_selector(['red', 'hold'])
red_press.onclick = () => button_selector(['red', 'press'])

var blue_abort = document.getElementById('blue-abort')
var blue_detonate = document.getElementById('blue-detonate')
var blue_hold = document.getElementById('blue-hold')
var blue_press = document.getElementById('blue-press')

blue_abort.onclick = () => button_selector(['blue', 'abort'])
blue_detonate.onclick = () => button_selector(['blue', 'detonate'])
blue_hold.onclick = () => button_selector(['blue', 'hold'])
blue_press.onclick = () => button_selector(['blue', 'press'])

var white_abort = document.getElementById('white-abort')
var white_detonate = document.getElementById('white-detonate')
var white_hold = document.getElementById('white-hold')
var white_press = document.getElementById('white-press')

white_abort.onclick = () => button_selector(['white', 'abort'])
white_detonate.onclick = () => button_selector(['white', 'detonate'])
white_hold.onclick = () => button_selector(['white', 'hold'])
white_press.onclick = () => button_selector(['white', 'press'])

var else_abort = document.getElementById('else-abort')
var else_detonate = document.getElementById('else-detonate')
var else_hold = document.getElementById('else-hold')
var else_press = document.getElementById('else-press')

else_abort.onclick = () => button_selector(['else', 'abort'])
else_detonate.onclick = () => button_selector(['else', 'detonate'])
else_hold.onclick = () => button_selector(['else', 'hold'])
else_press.onclick = () => button_selector(['else', 'press'])

var left_button = document.getElementById('left-button')
var right_button = document.getElementById('right-button')

left_button.onclick = () => directional_input('left')
right_button.onclick = () => directional_input('right')

var frk_lit_button = document.getElementById('frk-button')

frk_lit_button.onclick = frk_lit_change

var car_lit_button = document.getElementById('car-button')

car_lit_button.onclick = car_lit_change

function frk_lit_change(){
    frk_lit = true
    frk_lit_button.style.backgroundColor = '#1F509A'
}
function car_lit_change(){
    car_lit = true
    car_lit_button.style.backgroundColor = '#FF4545'
}

var reset_button = document.getElementById('reset')

reset_button.onclick = reset_screen

function reset_screen(){
    frk_lit = false
    car_lit = false
    document.getElementById('answer-header').innerText = ''
    document.getElementById("hold-div").style.visibility = 'hidden'
    num_of_batteries = 0
    var battery_label = document.getElementById("battery-label")
    battery_label.innerText = num_of_batteries
}


function directional_input(direction){
    switch(direction){
        case "left":
            if(num_of_batteries > 0){
                num_of_batteries--
            }
            break
        case "right":
            if(num_of_batteries < 10){
                num_of_batteries++
            }
            break
    }
    var battery_label = document.getElementById("battery-label")
    battery_label.innerText = num_of_batteries
}

function button_selector(button_tags){
    answer_header = document.getElementById('answer-header')
    hold_display = document.getElementById("hold-div")
    //blue button that says abort = hold
    if(button_tags[0] == 'blue' & button_tags[1] == 'abort'){
        answer_header.innerText = 'Hold'
        hold_display.style.visibility = 'visible'
    }
    //more than one battery and button says detonate = press
    else if(num_of_batteries > 1 & button_tags[1] == 'detonate'){
        answer_header.innerText = 'Press'
    }
    //button is white and car is lit = hold
    else if(button_tags[0] == 'white' & car_lit){
        answer_header.innerText = 'Hold'
        hold_display.style.visibility = 'visible'
    }
    //more than two batteries and frk lit = press
    else if(num_of_batteries > 2 & frk_lit){
        answer_header.innerText = 'Press'
    }
    //button is yellow = hold
    else if(button_tags[0] == 'yellow'){
        answer_header.innerText = 'Hold'
        hold_display.style.visibility = 'visible'
    }
    //button is red and says hold on it = hold
    else if(button_tags[0] == 'red' & button_tags[1] == 'abort'){
        answer_header.innerText = 'Hold'
        hold_display.style.visibility = 'visible'
    }
    //none of the above applies = hold
    else{
        answer_header.innerText = 'Hold'
        hold_display.style.visibility = 'visible'
    }
}