word_div = {}

word_div['ready'] = ['YES', 'OKAY', 'WHAT', 'MIDDLE', 'LEFT', 'PRESS', 'RIGHT', 'BLANK', 'READY', 'NO', 'FIRST', 'UHHH', 'NOTHING', 'WAIT']
word_div['first'] = ['LEFT', 'OKAY', 'YES', 'MIDDLE', 'NO', 'RIGHT', 'NOTHING', 'UHHH', 'WAIT', 'READY', 'BLANK', 'WHAT', 'PRESS', 'FIRST']
word_div['no'] = ['BLANK', 'UHHH', 'WAIT', 'FIRST', 'WHAT', 'READY', 'RIGHT', 'YES', 'NOTHING', 'LEFT', 'PRESS', 'OKAY', 'NO', 'MIDDLE']
word_div['blank'] = ['WAIT', 'RIGHT', 'OKAY', 'MIDDLE', 'BLANK', 'PRESS', 'READY', 'NOTHING', 'NO', 'WHAT', 'LEFT', 'UHHH', 'YES', 'FIRST']
word_div['nothing'] = ['UHHH', 'RIGHT', 'OKAY', 'MIDDLE', 'YES', 'BLANK', 'NO', 'PRESS', 'LEFT', 'WHAT', 'WAIT', 'FIRST', 'NOTHING', 'READY']
word_div['yes'] = ['OKAY', 'RIGHT', 'UHHH', 'MIDDLE', 'FIRST', 'WHAT', 'PRESS', 'READY', 'NOTHING', 'YES', 'LEFT', 'BLANK', 'NO', 'WAIT']
word_div['what'] = ['UHHH', 'WHAT', 'LEFT', 'NOTHING', 'READY', 'BLANK', 'MIDDLE', 'NO', 'OKAY', 'FIRST', 'WAIT', 'YES', 'PRESS', 'RIGHT']
word_div['uhhh'] = ['READY', 'NOTHING', 'LEFT', 'WHAT', 'OKAY', 'YES', 'RIGHT', 'NO', 'PRESS', 'BLANK', 'UHHH', 'MIDDLE', 'WAIT', 'FIRST']
word_div['left'] = ['RIGHT', 'LEFT', 'FIRST', 'NO', 'MIDDLE', 'YES', 'BLANK', 'WHAT', 'UHHH', 'WAIT', 'PRESS', 'READY', 'OKAY', 'NOTHING']
word_div['right'] = ['YES', 'NOTHING', 'READY', 'PRESS', 'NO', 'WAIT', 'WHAT', 'RIGHT', 'MIDDLE', 'LEFT', 'UHHH', 'BLANK', 'OKAY', 'FIRST']
word_div['middle'] = ['BLANK', 'READY', 'OKAY', 'WHAT', 'NOTHING', 'PRESS', 'NO', 'WAIT', 'LEFT', 'MIDDLE', 'RIGHT', 'FIRST', 'UHHH', 'YES']
word_div['okay'] = ['MIDDLE', 'NO', 'FIRST', 'YES', 'UHHH', 'NOTHING', 'WAIT', 'OKAY', 'LEFT', 'READY', 'BLANK', 'PRESS', 'WHAT', 'RIGHT']
word_div['wait'] = ['UHHH', 'NO', 'BLANK', 'OKAY', 'YES', 'LEFT', 'FIRST', 'PRESS', 'WHAT', 'WAIT', 'NOTHING', 'READY', 'RIGHT', 'MIDDLE']
word_div['press'] = ['RIGHT', 'MIDDLE', 'YES', 'READY', 'PRESS', 'OKAY', 'NOTHING', 'UHHH', 'BLANK', 'LEFT', 'FIRST', 'WHAT', 'NO', 'WAIT']
word_div['you'] = ['SURE', 'YOU ARE', 'YOUR', "YOU'RE", 'NEXT', 'UH HUH', 'UR', 'HOLD', 'WHAT?', 'YOU', 'UH UH', 'LIKE', 'DONE', 'U']
word_div['you-are'] = ['YOUR', 'NEXT', 'LIKE', 'UH HUH', 'WHAT?', 'DONE', 'UH UH', 'HOLD', 'YOU', 'U,', "YOU'RE", 'SURE', 'UR', 'YOU ARE']
word_div['your'] = ['UH UH', 'YOU ARE', 'UH HUH', 'YOUR', 'NEXT', 'UR', 'SURE', 'U', "YOU'RE", 'YOU', 'WHAT?', 'HOLD', 'LIKE', 'DONE']
word_div["you're"] = ['YOU', "YOU'RE", 'UR', 'NEXT', 'UH UH', 'YOU ARE', 'U', 'YOUR', 'WHAT?', 'UH HUH', 'SURE', 'DONE', 'LIKE', 'HOLD']
word_div['ur'] = ['DONE', 'U', 'UR', 'UH HUH', 'WHAT?', 'SURE', 'YOUR', 'HOLD', "YOU'RE", 'LIKE', 'NEXT', 'UH UH', 'YOU ARE', 'YOU']
word_div['u'] = ['UH HUH', 'SURE', 'NEXT', 'WHAT?', "YOU'RE", 'UR', 'UH UH', 'DONE', 'U', 'YOU', 'LIKE', 'HOLD', 'YOU ARE', 'YOUR']
word_div['uh-huh'] = ['UH HUH', 'YOUR', 'YOU ARE', 'YOU', 'DONE', 'HOLD', 'UH UH', 'NEXT', 'SURE', 'LIKE', "YOU'RE", 'UR', 'U', 'WHAT?']
word_div['uh-uh'] = ['UR', 'U', 'YOU ARE', "YOU'RE", 'NEXT', 'UH UH', 'DONE', 'YOU', 'UH HUH', 'LIKE', 'YOUR', 'SURE', 'HOLD', 'WHAT?']
word_div['what?'] = ['YOU', 'HOLD', "YOU'RE", 'YOUR', 'U', 'DONE', 'UH UH', 'LIKE', 'YOU ARE', 'UH HUH', 'UR', 'NEXT', 'WHAT?', 'SURE']
word_div['done'] = ['SURE', 'UH HUH', 'NEXT', 'WHAT?', 'YOUR', 'UR', "YOU'RE", 'HOLD', 'LIKE', 'YOU', 'U', 'YOU ARE', 'UH UH', 'DONE']
word_div['next'] = ['WHAT?', 'UH HUH', 'UH UH', 'YOUR', 'HOLD', 'SURE', 'NEXT', 'LIKE', 'DONE', 'YOU ARE', 'UR', "YOU'RE", 'U', 'YOU']
word_div['hold'] = ['YOU ARE', 'U', 'DONE', 'UH UH', 'YOU', 'UR', 'SURE', 'WHAT?', "YOU'RE", 'NEXT', 'HOLD', 'UH HUH', 'YOUR', 'LIKE']
word_div['sure'] = ['YOU ARE', 'DONE', 'LIKE', "YOU'RE", 'YOU', 'HOLD', 'UH HUH', 'UR', 'SURE', 'U', 'WHAT?', 'NEXT', 'YOUR', 'UH UH']
word_div['like'] = [ "YOU'RE", 'NEXT', 'U', 'UR', 'HOLD', 'DONE', 'UH UH', 'WHAT?', 'UH HUH', 'YOU', 'LIKE', 'SURE', 'YOU ARE', 'YOUR']

labels = ['yes', 'first', 'display', 'okay', 'says', 'nothing', '', 'blank', 'no', 'led', 'lead', 'read', 'red', 'reed', 'leed',
    'hold-on', 'you', 'you-are', 'your', "you're", 'ur', 'there', "they're", 'their', 'they-are', 'see', 'c','cee'
]

label_div = {}

labels.forEach(label => {
    label_div[label] = document.getElementById(`label-button-${label}`)
    label_div[label].onclick = () => label_click(label)
});

button_labels = ['ready', 'first', 'no', 'blank', 'nothing', 'yes', 'what', 'uhhh', 'left', 'right', 'middle', 'okay', 'wait', 'press', 'you',
    'you-are', 'your', "you're", 'ur', 'u', 'uh-huh', 'uh-uh', 'what?', 'done', 'next', 'hold', 'sure', 'like'
]

button_label_div = {}

button_labels.forEach(button_label => {
    button_label_div[button_label] = document.getElementById(`button-label-button-${button_label}`)
    button_label_div[button_label].onclick = () => button_label_click(button_label, word_div)
});

function label_click(label){
    //click top left
    if(label == 'ur'){
        document.getElementById('answer-header').innerText = 'Top-Left'
    }
    //click middle left
    else if(['yes', 'nothing', 'led', 'they-are'].includes(label)){
        document.getElementById('answer-header').innerText = 'Middle-Left'
    }
    //click bottom left
    else if(['', 'reed', 'leed', "they're"].includes(label)){
        document.getElementById('answer-header').innerText = 'Bottom-Left'
    }
    //click top right
    else if(['first', 'okay', 'c'].includes(label)){
        document.getElementById('answer-header').innerText = 'Top-Right'
    }
    //click middle right
    else if(['blank', 'read', 'red', 'you', 'your', "you're", 'their',]){
        document.getElementById('answer-header').innerText = 'Middle-Right' 
    }
    else if(['display', 'says', 'no', 'lead', 'hold-on', 'you-are', 'there', 'see', 'cee']){
        document.getElementById('answer-header').innerText = 'Bottom-Right'
    }
}

function button_label_click(button_label, word_div){
    display_word_list = word_div[button_label]
    console.log(button_label)
    for(var x = 0; x < display_word_list.length; x++){
        document.getElementById(`word-header-${x+1}`).innerText = display_word_list[x]
    }
}