var vowel_button = document.getElementById('vowel-button')
vowel_button.onclick = vowel_click

var strike_button = document.getElementById('strike-button')
strike_button.onclick = strike_click

var blue_button = document.getElementById('blue-button')
blue_button.onclick = () => select_colour('blue')

var red_button = document.getElementById('red-button')
red_button.onclick = () => select_colour('red')

var yellow_button = document.getElementById('yellow-button')
yellow_button.onclick = () => select_colour('yellow')

var green_button = document.getElementById('green-button')
green_button.onclick = () => select_colour('green')

var submit_button = document.getElementById('submit-button')
submit_button.onclick = submit_colours

var reset_button = document.getElementById('reset-button')
reset_button.onclick = reset_screen

var strike_count = 0
var chosen_colours = []
var vowel = false

hex_colours = {}

hex_colours['red'] = '#FF0000'
hex_colours['blue'] = '#1F509A'
hex_colours['yellow'] = '#FFB200'
hex_colours['green'] = '#00FF9C'

function vowel_click(){
    if(vowel){
        vowel_button.style.backgroundColor = '#FB773C'
        vowel = false
    }
    else{
        vowel_button.style.backgroundColor = '#1F509A'
        vowel = true
    }
}

function strike_click(){
    if(strike_count < 2){
        strike_count++
        document.getElementById(`strike-${strike_count}`).style.visibility = 'visible'
    }
}

function submit_colours(){
    order_to_press = []
    if(vowel){
        if(strike_count == 0){
            chosen_colours.forEach(colour => {
                switch(colour){
                    case 'red':
                        order_to_press.push('blue')
                        break
                    case 'blue':
                        order_to_press.push('red')
                        break
                    case 'green':
                        order_to_press.push('yellow')
                        break
                    case 'yellow':
                        order_to_press.push('green')
                        break
                }
            });
        }
        else if(strike_count == 1){
            chosen_colours.forEach(colour => {
                switch(colour){
                    case 'red':
                        order_to_press.push('yellow')
                        break
                    case 'blue':
                        order_to_press.push('green')
                        break
                    case 'green':
                        order_to_press.push('blue')
                        break
                    case 'yellow':
                        order_to_press.push('red')
                        break
                }
            });
        }
        else if(strike_count == 2){
            chosen_colours.forEach(colour => {
                switch(colour){
                    case 'red':
                        order_to_press.push('green')
                        break
                    case 'blue':
                        order_to_press.push('red')
                        break
                    case 'green':
                        order_to_press.push('yellow')
                        break
                    case 'yellow':
                        order_to_press.push('blue')
                        break
                }
            });
        }
    }

    else{
        if(strike_count == 0){
            chosen_colours.forEach(colour => {
                switch(colour){
                    case 'red':
                        order_to_press.push('blue')
                        break
                    case 'blue':
                        order_to_press.push('yellow')
                        break
                    case 'green':
                        order_to_press.push('green')
                        break
                    case 'yellow':
                        order_to_press.push('red')
                        break
                }
            });
        }
        else if(strike_count == 1){
            chosen_colours.forEach(colour => {
                switch(colour){
                    case 'red':
                        order_to_press.push('red')
                        break
                    case 'blue':
                        order_to_press.push('blue')
                        break
                    case 'green':
                        order_to_press.push('yellow')
                        break
                    case 'yellow':
                        order_to_press.push('green')
                        break
                }
            });
        }
        else if(strike_count == 2){
            chosen_colours.forEach(colour => {
                switch(colour){
                    case 'red':
                        order_to_press.push('yellow')
                        break
                    case 'blue':
                        order_to_press.push('green')
                        break
                    case 'green':
                        order_to_press.push('blue')
                        break
                    case 'yellow':
                        order_to_press.push('red')
                        break
                }
            });
        }
    }
    for(var x = 0; x < order_to_press.length; x++){
        document.getElementById(`colour-display-${x+1}`).style.backgroundColor = hex_colours[order_to_press[x]]
    }
    
}

function reset_screen(){
    for(var x = 1; x < 6; x++){
        document.getElementById(`colour-display-${x}`).style.backgroundColor = '#FB773C'
    }

    chosen_colours = []
}

function select_colour(colour){
    chosen_colours.push(colour)
}