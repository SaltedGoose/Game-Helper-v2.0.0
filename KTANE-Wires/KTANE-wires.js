var current_display = 1
var number_of_batteries = 0
var serial = 'none';

var wire_list = []

var num_of_red = 0;
var num_of_blue = 0;
var num_of_yellow = 0;
var num_of_white = 0;
var num_of_black = 0;

var red_button = document.getElementById("red-button")
var blue_button = document.getElementById("blue-button")
var yellow_button = document.getElementById("yellow-button")
var white_button = document.getElementById("white-button")
var black_button = document.getElementById("black-button")

red_button.onclick = () => button_click("red")
blue_button.onclick = () => button_click("blue")
yellow_button.onclick = () => button_click("yellow")
white_button.onclick = () => button_click("white")
black_button.onclick = () => button_click("black")

var left_button = document.getElementById("left-button")
var right_button = document.getElementById("right-button")

left_button.onclick = () => directional_click("left")
right_button.onclick = () => directional_click("right")

var odd_button = document.getElementById('odd-button')
var even_button = document.getElementById('even-button')

odd_button.onclick = () => serial_change('odd')
even_button.onclick = () => serial_change('even')

var submit_button = document.getElementById("submit")
var reset_button = document.getElementById("reset")

submit_button.onclick = submit_page;
reset_button.onclick = reset_page;

function serial_change(serial_end){
    serial = serial_end
    switch(serial_end){
        case 'odd':
            odd_button.style.backgroundColor = '#FF4545'
            even_button.style.backgroundColor = '#FB773C'
            break
        case 'even':
            even_button.style.backgroundColor = '#1F509A'
            odd_button.style.backgroundColor = '#FB773C'
            break
    }
}

function reset_page(){  
    wire_list = []
    current_display = 1;
    num_of_red, num_of_blue, num_of_yellow, num_of_white, num_of_black = 0
    for(var x = 1; x < 7; x++){
        var current_display_button = document.getElementById(`colour-display-${x}`);
        current_display_button.style.backgroundColor = '#FB773C';
        var current_display_button = document.getElementById(`cut-display-${x}`);
        current_display_button.style.visibility = 'hidden'
    }
}

function submit_page(){
    if(serial == 'none'){
        return
    }
    if(wire_list.length == 3){
        if(wire_list.includes("red")){
            document.getElementById("cut-display-2").style.visibility = 'visible'
        }
        else if(num_of_blue > 1){
            var last_blue = wire_list.findLastIndex(function last_blue(element){return element == 'blue'})
            document.getElementById(`cut-display-${last_blue+1}`).style.visibility = 'visible'
        }
        else{
            document.getElementById("cut-display-3").style.visibility = 'visible'
        }
    }
    else if(wire_list.length == 4){
        if(num_of_red > 1 & serial == 'odd'){
            var last_red = wire_list.findLastIndex(function last_red(element){return element == 'red'})
            document.getElementById(`cut-display-${last_red+1}`).style.visibility = 'visible'
        }
        else if(wire_list[wire_list.length - 1] == 'yellow' & num_of_red == 0){
            document.getElementById('cut-display-1').style.visibility = 'visible'
        }
        else if(num_of_blue == 1){
            document.getElementById('cut-display-1').style.visibility = 'visible'
        }
        else if(num_of_yellow > 1){
            document.getElementById('cut-display-4').style.visibility = 'visible'
        }
        else{
            document.getElementById('cut-display-2').style.visibility = 'visible'
        }
    }
    else if(wire_list.length == 5){
        if(wire_list[wire_list.length - 1] == 'black' & serial == 'odd'){
            document.getElementById('cut-display-4').style.visibility = 'visible'
        }
        else if(num_of_black == 0){
            document.getElementById('cut-display-2').style.visibility = 'visible'
        }
        else{
            document.getElementById('cut-display-1').style.visibility = 'visible'
        }
    }
    else if(wire_list == 6){
        if(num_of_yellow == 0 & serial == 'odd'){
            document.getElementById('cut-display-3').style.visibility = 'visible'
        }
        else if(num_of_red == 0){
            document.getElementById('cut-display-6').style.visibility = 'visible'
        }
        else{
            document.getElementById('cut-display-4').style.visibility = 'visible'
        }
    }
}

function directional_click(direction){
    switch(direction){
        case "left":
            if(number_of_batteries > 0){
                number_of_batteries--
            }
            break
        case "right":
            if(number_of_batteries < 10){
                number_of_batteries++
            }
            break
    }
    var battery_label = document.getElementById("battery-label")
    battery_label.innerText = number_of_batteries
}

function button_click(colour){
    if(current_display < 7){
        var current_display_button = document.getElementById(`colour-display-${current_display}`)
        wire_list.push(colour)
        switch(colour){
            case "red":
                current_display_button.style.backgroundColor = '#B8001F'
                num_of_red++
                break
            case "blue":
                current_display_button.style.backgroundColor = '#384B70'
                num_of_blue++
                break
            case "yellow":
                current_display_button.style.backgroundColor = '#FFB200'
                num_of_yellow++
                break
            case "white":
                current_display_button.style.backgroundColor = '#FDF7F4'
                num_of_white++
                break
            case "black":
                current_display_button.style.backgroundColor = '#1A1A1D'
                num_of_black++
                break
        }
        current_display++
    }
}