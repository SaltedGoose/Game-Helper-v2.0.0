symbols = [
    'ae',
    'backwards-c-with-two-dots',
    'backwards-k',
    'backwards-n',
    'blank-star',
    'boob',
    'bt',
    'curly-c-and-o',
    'face',
    'fancy-h',
    'flag',
    'jigsaw',
    'lightning-bolt',
    'magnifying-glass',
    'omega',
    'pyramid',
    'reverse-boob',
    'robot-with-stick',
    'six',
    'snake',
    'star',
    'unfinished-three',
    'upside-y',
    'upside-question-mark',
    'copyright',
    'nutsack',
    'trident'
]

symbol_list_1 = ['magnifying-glass', 'pyramid', 'upside-y', 'lightning-bolt', 'robot-with-stick', 'fancy-h', 'boob']
symbol_list_2 = ['backwards-c-with-two-dots', 'magnifying-glass', 'boob', 'curly-c-and-o', 'blank-star', 'fancy-h', 'upside-question-mark']
symbol_list_3 = ['copyright', 'nutsack', 'curly-c-and-o', 'backwards-k', 'unfinshed-three', 'upside-y', 'blank-star']
symbol_list_4 = ['six', 'flag', 'bt', 'robot-with-stick', 'backwards-k', 'upside-question-mark', 'face']
symbol_list_5 = ['trident', 'face', 'bt', 'reverse-boob', 'flag', 'snake', 'star']
symbol_list_6 = ['six', 'backwards-c-with-two-dots', 'jigsaw', 'ae', 'trident', 'backwards-n', 'omega']

symbol_list_dict = {}

symbol_list_dict['one'] = symbol_list_1,
symbol_list_dict['two'] = symbol_list_2
symbol_list_dict['three'] = symbol_list_3
symbol_list_dict['four'] = symbol_list_4
symbol_list_dict['five'] = symbol_list_5
symbol_list_dict['six'] = symbol_list_6

symbol_buttons_dict = {}
selected_symbols = []

symbols.forEach(symbol => {
    symbol_buttons_dict[symbol] = document.getElementById(`${symbol}-button`)
    symbol_buttons_dict[symbol].onclick = () => select_symbol(symbol)
});

submit_button = document.getElementById('submit-button').onclick = show_order

reset_button = document.getElementById('reset-button').onclick = reset_screen

var valid_symbols = (selected_symbols, current_symbol_list) => current_symbol_list.every(symbol => selected_symbols.includes(symbol));

function reset_screen(){
    selected_symbols = []
    for(var x = 1; x < 5; x++){
        document.getElementById(`display-symbol-${x}`).src = "../imgs/keypad-imgs/blank-square.png"
    }
    document.getElementById('incorrect-symbol-display').style.visibility = 'hidden'
}

function select_symbol(symbol){
    if(selected_symbols.length < 4 & !selected_symbols.includes(symbol)){
        selected_symbols.push(symbol)
        document.getElementById(`display-symbol-${selected_symbols.length}`).src = `../imgs/keypad-imgs/${symbol}.png`
    }
}

function show_order(){
    order_to_click = []
    ordered_symbols = []
    list_to_use = ''
    valid_selections = false

    Object.keys(symbol_list_dict).forEach(list => {
        if(valid_symbols(symbol_list_dict[list], selected_symbols)){
            valid_selections = true
        }
    });

    if(valid_selections){
        if(selected_symbols.includes('pyramid') || selected_symbols.includes('lightning-bolt')){
            list_to_use = 'one'
        }
        else if(selected_symbols.includes('copyright') || selected_symbols.includes('nutsuck') || selected_symbols.includes('unfinished-three')){
            list_to_use = 'three'
        }
        else if(selected_symbols.includes('reverse-boob') || selected_symbols.includes('snake') || selected_symbols.includes('star')){
            list_to_use = 'five'
        }
        else if(selected_symbols.includes('jigsaw') || selected_symbols.includes('ae') || selected_symbols.includes('reverse-n') || selected_symbols.includes('omega'))
            list_to_use = 'six'
        else{
            valid_list = true
            selected_symbols.forEach(symbol => {
                valid_list = symbol_list_2.includes(symbol)
            });
            if(valid_list){
                list_to_use = 'two'
            }
            else{
                list_to_use = 'four'
            }
        }
    
        selected_symbols.forEach(symbol =>{
            order_to_click.push(symbol_list_dict[list_to_use].indexOf(symbol))
        });
        order_to_click.sort()
        order_to_click.forEach(index => {
            ordered_symbols.push(symbol_list_dict[list_to_use][index])
        });
        for(var x = 1; x < 5; x++){
            document.getElementById(`display-symbol-${x}`).src = `../imgs/keypad-imgs/${ordered_symbols[x-1]}.png`
        }
    }
    else{
        document.getElementById('incorrect-symbol-display').style.visibility = 'visible'
    }
}