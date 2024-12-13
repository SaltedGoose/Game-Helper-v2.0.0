var num_of_turns = 1
var position_nums = []

var up_arrow_1 = document.getElementById('up-arrow-1')
up_arrow_1.onclick = () => arrow_click('up', '1')

var up_arrow_2 = document.getElementById('up-arrow-2')
up_arrow_2.onclick = () => arrow_click('up', '2')

var up_arrow_3 = document.getElementById('up-arrow-3')
up_arrow_3.onclick = () => arrow_click('up', '3')

var up_arrow_4 = document.getElementById('up-arrow-4')
up_arrow_4.onclick = () => arrow_click('up', '4')

var down_arrow_1 = document.getElementById('down-arrow-1')
down_arrow_1.onclick = () => arrow_click('down', '1')

var down_arrow_2 = document.getElementById('down-arrow-2')
down_arrow_2.onclick = () => arrow_click('down', '2')

var down_arrow_3 = document.getElementById('down-arrow-3')
down_arrow_3.onclick = () => arrow_click('down', '3')

var down_arrow_4 = document.getElementById('down-arrow-4')
down_arrow_4.onclick = () => arrow_click('down', '4')

var chosen_button_1 = document.getElementById('num-display-1')
chosen_button_1.onclick = () => number_click('1', chosen_button_1.innerHTML, position_nums)

var chosen_button_2 = document.getElementById('num-display-2')
chosen_button_2.onclick = () => number_click('2', chosen_button_2.innerHTML, position_nums)

var chosen_button_3 = document.getElementById('num-display-3')
chosen_button_3.onclick = () => number_click('3', chosen_button_3.innerHTML, position_nums)

var chosen_button_4 = document.getElementById('num-display-4')
chosen_button_4.onclick = () => number_click('4', chosen_button_4.innerHTML, position_nums)

var display_1 = document.getElementById('display-1-button')
display_1.onclick = () => display_button_click('1')

var display_2 = document.getElementById('display-2-button')
display_2.onclick = () => display_button_click('2')

var display_3 = document.getElementById('display-3-button')
display_3.onclick = () => display_button_click('3')

var display_4 = document.getElementById('display-4-button')
display_4.onclick = () => display_button_click('4')

var reset_button = document.getElementById('reset-button')
reset_button.onclick = reset_screen

function reset_screen(){
    position_nums = []
    document.getElementById('pos-num-display').innerText = 'Pos:   -   Num: '
    num_of_turns = 1
    document.getElementById('number-heading').innerText = num_of_turns
    for(var x = 1; x < 6; x++){
        document.getElementById(`memory-light-${x}`).style.visibility = 'hidden'
    }
}

function arrow_click(direction, display){
    current_display = document.getElementById(`num-display-${display}`)
    var value = parseInt(current_display.innerHTML)
    switch(direction){
        case 'up':
            if(value < 4){value++}
            break
        case 'down':
            if(value > 1){value--}
            break
    }
    current_display.innerHTML = value
}

function number_click(position, number, position_nums){
    document.getElementById(`memory-light-${num_of_turns}`).style.visibility = 'visible'

    if(num_of_turns < 5){
        position_nums.push([position, number])

        num_of_turns++

        document.getElementById('number-heading').innerText = num_of_turns
        
        for(var x = 1; x < 5; x++){
            document.getElementById(`num-display-${x}`).innerText = '1'
        }

    }
    else{
        document.getElementById('number-heading').innerText = 'done'
    }
}

function display_button_click(number){
    pos_num_display = document.getElementById('pos-num-display')
    pos = '-'
    num = '-'
    switch(number){
        case '1':
            switch(num_of_turns){
                case 1:
                    pos = '2'
                    break
                case 2:
                    num = '4'
                    break
                case 3:
                    num = position_nums[1][1]
                    break
                case 4:
                    pos = position_nums[0][0]
                    break
                case 5:
                    num = position_nums[0][1]
                    break
            }
            break
        case '2':
            switch(num_of_turns){
                case 1:
                    pos = '2'
                    break
                case 2:
                    pos = position_nums[0][0]
                    break
                case 3:
                    num = position_nums[0][1]
                    break
                case 4:
                    pos = '1'
                    break
                case 5:
                    num = position_nums[1][1]
                    break
            }
            break
        case '3':
            switch(num_of_turns){
                case 1:
                    pos = '3'
                    break
                case 2:
                    pos = '1'
                    break
                case 3:
                    pos = '3'
                    break
                case 4:
                    pos = position_nums[1][0]
                    break
                case 5:
                    num = position_nums[3][1]
                    break
            }
            break
        case '4':
            switch(num_of_turns){
                case 1:
                    pos = '4'
                    break
                case 2:
                    pos = position_nums[0][0]
                    break
                case 3:
                    num = '4'
                    break
                case 4:
                    pos = position_nums[1][0]
                    break
                case 5:
                    num = position_nums[2][1]
                    break
            }
            break
    }
    pos_num_display.innerText = `Pos: ${pos}   -   Num: ${num}`
}



