//Light Buttons
var light_button_1 = document.getElementById('light-button-1')
light_button_1.onclick = () => light_button_click('1')

var light_button_2 = document.getElementById('light-button-2')
light_button_2.onclick = () => light_button_click('2')

var light_button_3 = document.getElementById('light-button-3')
light_button_3.onclick = () => light_button_click('3')

var light_button_4 = document.getElementById('light-button-4')
light_button_4.onclick = () => light_button_click('4')

var light_button_5 = document.getElementById('light-button-5')
light_button_5.onclick = () => light_button_click('5')

var light_button_6 = document.getElementById('light-button-6')
light_button_6.onclick = () => light_button_click('6')
//Star Buttons
var star_button_1 = document.getElementById('star-button-1')
star_button_1.onclick = () => star_button_click('1')

var star_button_2 = document.getElementById('star-button-2')
star_button_2.onclick = () => star_button_click('2')

var star_button_3 = document.getElementById('star-button-3')
star_button_3.onclick = () => star_button_click('3')

var star_button_4 = document.getElementById('star-button-4')
star_button_4.onclick = () => star_button_click('4')

var star_button_5 = document.getElementById('star-button-5')
star_button_5.onclick = () => star_button_click('5')

var star_button_6 = document.getElementById('star-button-6')
star_button_6.onclick = () => star_button_click('6')
//Up Arrows
var up_arrow_1 = document.getElementById('up-button-1')
up_arrow_1.onclick = () => up_click('1')

var up_arrow_2 = document.getElementById('up-button-2')
up_arrow_2.onclick = () => up_click('2')

var up_arrow_3 = document.getElementById('up-button-3')
up_arrow_3.onclick = () => up_click('3')

var up_arrow_4 = document.getElementById('up-button-4')
up_arrow_4.onclick = () => up_click('4')

var up_arrow_5 = document.getElementById('up-button-5')
up_arrow_5.onclick = () => up_click('5')

var up_arrow_6 = document.getElementById('up-button-6')
up_arrow_6.onclick = () => up_click('6')
//Down Arrows
var down_arrow_1 = document.getElementById('down-button-1')
down_arrow_1.onclick = () => down_click('1')

var down_arrow_2 = document.getElementById('down-button-2')
down_arrow_2.onclick = () => down_click('2')

var down_arrow_3 = document.getElementById('down-button-3')
down_arrow_3.onclick = () => down_click('3')

var down_arrow_4 = document.getElementById('down-button-4')
down_arrow_4.onclick = () => down_click('4')

var down_arrow_5 = document.getElementById('down-button-5')
down_arrow_5.onclick = () => down_click('5')

var down_arrow_6 = document.getElementById('down-button-6')
down_arrow_6.onclick = () => down_click('6')
//Left Button
var left_button = document.getElementById('left-button')
left_button.onclick = () => directional_click('left')
//Right Button
var right_button = document.getElementById('right-button')
right_button.onclick = () => directional_click('right')
//Parallel Button
var parallel_button = document.getElementById('parallel-button')
parallel_button.onclick = parallel_click
//Even Button
var even_button = document.getElementById('even-button')
even_button.onclick = even_click
//Submit Button
var submit_button = document.getElementById('submit-button')
submit_button.onclick = submit
//Reset Button
var reset_button = document.getElementById('reset-button')
reset_button.onclick = reset


//Button States
light_button_states = [false, false, false, false, false, false]
star_button_states = [false, false, false, false, false, false]
//Wire Colours
wire_colours = ['red', 'blue', 'white', 'blue-white', 'red-white', 'red-blue', 'blank']
//Wire states
wire_states = ['red', 'red', 'red', 'red', 'red', 'red']
//Parallel State
parallel_state = false
//Number of Batteries
num_of_batteries = 0
//Even State
even_state = false
//Wire Cut States
wire_cut_states = ['no-cut', 'no-cut', 'no-cut', 'no-cut', 'no-cut', 'no-cut']

function directional_click(direction){
    battery_label = document.getElementById('battery-label')
    switch(direction){
        case 'left':
            if(num_of_batteries > 0){
                num_of_batteries--
                battery_label.innerHTML = num_of_batteries
            }
            break
        case 'right':
            if(num_of_batteries < 10){
                num_of_batteries++
                battery_label.innerHTML = num_of_batteries
            }
            break
    }
}

function parallel_click(){
    if(!parallel_state){
        parallel_state = true
        parallel_button.style.backgroundColor = '#fd94f1'
        parallel_button.style.borderColor = '#fd94f1'
    }
    else{
        parallel_state = false
        parallel_button.style.backgroundColor = '#FDF7F4'
        parallel_button.style.borderColor = '#FDF7F4'
    }
}

function even_click(){
    if(!even_state){
        even_state = true
        even_button.style.backgroundColor = '#FF0000'
    }
    else{
        even_state = false
        even_button.style.backgroundColor = '#FB773C'
    }
}

function up_click(wire_num){
    current_wire_img = document.getElementById(`wire-${wire_num}-img`)
    current_wire_state = wire_states[wire_num - 1]
    if(current_wire_state == 'blank'){
        new_wire_state = 'red'
    }
    else{
        new_wire_state = wire_colours[wire_colours.indexOf(current_wire_state) + 1]
    }
    wire_states[wire_num - 1] = new_wire_state
    current_wire_img.src = `../imgs/wire-imgs/${new_wire_state}-wire.png`
}

function down_click(wire_num){
    current_wire_img = document.getElementById(`wire-${wire_num}-img`)
    current_wire_state = wire_states[wire_num - 1]
    if(current_wire_state == 'red'){
        new_wire_state = 'blank'
    }
    else{
        new_wire_state = wire_colours[wire_colours.indexOf(current_wire_state) - 1]
    }
    wire_states[wire_num - 1] = new_wire_state
    current_wire_img.src = `../imgs/wire-imgs/${new_wire_state}-wire.png`
}

function light_button_click(light_button_number){
    current_light_button = document.getElementById(`light-button-${light_button_number}`)
    if(!light_button_states[light_button_number - 1]){
        current_light_button.style.backgroundColor = '#FEEC37'
        light_button_states[light_button_number - 1] = true
    }
    else{
        current_light_button.style.backgroundColor = '#FDF7F4'
        light_button_states[light_button_number - 1] = false
    }
}

function star_button_click(star_button_number){
    current_star_button = document.getElementById(`star-button-${star_button_number}`)
    if(!star_button_states[star_button_number - 1]){
        current_star_button.innerHTML = '★'
        star_button_states[star_button_number - 1] = true
    }
    else{
        current_star_button.innerHTML = ''
        star_button_states[star_button_number - 1] = false
    }
}

function submit(){
    for(var x = 0; x < wire_states.length; x++){
        console.log(wire_states[x])
        switch(wire_states[x]){
            case 'white':
                console.log('here-white')
                switch(light_button_states[x]){
                    case true:
                        if(num_of_batteries >= 2 & star_button_states[x]){
                            wire_cut_states[x] = 'cut'
                        }
                        break
                    case false:
                        wire_cut_states[x] = 'cut'
                        break
                }
                break
            case 'red':
            case 'red-white':
                console.log('here-red')
                switch(light_button_states[x]){
                    case true:
                        if(num_of_batteries >= 2){
                            wire_cut_states[x] = 'cut'
                        }
                        break
                    case false:
                        switch(star_button_states[x]){
                            case true:
                                wire_cut_states[x] = 'cut'
                                break
                            case false:
                                if(even_state){
                                    wire_cut_states[x] = 'cut'
                                }
                                break
                        }
                        break
                }
                break
            case 'blue':
            case 'blue-white':
                console.log('here-blue')
                switch(light_button_states[x]){
                    case true:
                        if(parallel_state){
                            wire_cut_states[x] = 'cut'
                        }
                        break
                    case false:
                        console.log(star_button_states)
                        if(!star_button_states[x] & even_state){
                            wire_cut_states[x] = 'cut'
                        }
                        break
                }
                break
                
            case 'red-blue':
                console.log('here-red-blue')
                switch(light_button_states[x]){
                    case true:
                        if(!star_button_states[x] & even_state){
                            wire_cut_states[x] = 'cut'
                        }
                        break
                    case false:
                        switch(star_button_states){
                            case true:
                                if(even_state){
                                    wire_cut_states[x] = 'cut'
                                }
                                break
                            case false:
                                if(parallel_state){
                                    wire_cut_states[x] = 'cut'
                                }
                                break
                        }
                        break
                }
                break
        }
    }
    for(var x = 0; x < wire_cut_states.length; x++){
        if(wire_cut_states[x] == 'cut'){
            current_wire_img = document.getElementById(`wire-${x + 1}-img`)
            current_wire_img.src = `../imgs/wire-imgs/${wire_states[x]}-wire-cut.png`
        }
    };
    console.log(wire_cut_states)
}

function reset(){
    wire_cut_states = ['no-cut', 'no-cut', 'no-cut', 'no-cut', 'no-cut', 'no-cut']
    wire_states = ['red', 'red', 'red', 'red', 'red', 'red']
    light_button_states = [false, false, false, false, false, false]
    star_button_states = [false, false, false, false, false, false]

    all_lights = [light_button_1, light_button_2, light_button_3, light_button_4, light_button_5, light_button_6]

    all_lights.forEach(light=> {
        light.style.backgroundColor = '#FDF7F4'
    });

    all_stars = [star_button_1, star_button_2, star_button_3, star_button_4, star_button_5, star_button_6]

    all_stars.forEach(star => {
       star.innerHTML = '' 
    });

    for(var x = 1; x < 7; x++){
        current_wire_img = document.getElementById(`wire-${x}-img`)
        current_wire_img.src = '../imgs/wire-imgs/red-wire.png'
    }
}