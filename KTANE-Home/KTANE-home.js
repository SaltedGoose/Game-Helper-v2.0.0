var button_1 = document.getElementById("selector-1")
var button_2 = document.getElementById("selector-2")
var button_3 = document.getElementById("selector-3")
var button_4 = document.getElementById("selector-4")
var button_5 = document.getElementById("selector-5")
var button_6 = document.getElementById("selector-6")
var button_7 = document.getElementById("selector-7")
var button_8 = document.getElementById("selector-8")
var button_9 = document.getElementById("selector-9")
var button_10 = document.getElementById("selector-10")
var button_11 = document.getElementById("selector-11")

var display_img = document.getElementById("current-ktane-helper-img")
var display_description = document.getElementById("current-ktane-helper-description")
var page_link = document.getElementById("page-link")

button_1.onclick = () => change_current_helper_display("wires", display_img, display_description);
button_2.onclick = () => change_current_helper_display("buttons", display_img, display_description);
button_3.onclick = () => change_current_helper_display("keypads", display_img, display_description);
button_4.onclick = () => change_current_helper_display("simon-says", display_img, display_description);
button_5.onclick = () => change_current_helper_display("who's on first", display_img, display_description);
button_6.onclick = () => change_current_helper_display('memory', display_img, display_description)
button_7.onclick = () => change_current_helper_display("morse-code", display_img, display_description);
button_8.onclick = () => change_current_helper_display("complicated-wires", display_img, display_description);
button_9.onclick = () => change_current_helper_display("wire-sequences", display_img, display_description);
button_10.onclick = () => change_current_helper_display("mazes", display_img, display_description);
button_11.onclick = () => change_current_helper_display("passwords", display_img, display_description);


function change_current_helper_display(display, display_img, display_description){
    switch(display){
        case "wires":
            display_img.src = "../imgs/ktane-wires.png"
            display_description.innerText = 'Click wire colours in order and input number of batteries and if serial ends in odd or even number.'+
            'The page will then display which selected wire needs to be cut to complete the module.'
            page_link.setAttribute('href', "../KTANE-Wires/KTANE-wires.html")
            break
        case "buttons":
            display_img.src = "../imgs/ktane-button.png" 
            display_description.innerText = 'Select the button that you can see on your screen. Also input the number of batteries and if frk and car are lit. '+
            'The then the page will tell you if you should press or hold the button. For any colour other red, blue or white press black.'
            page_link.setAttribute('href', "../KTANE-Buttons/KTANE-buttons.html")
            break
        case "keypads":
            display_img.src = "../imgs/ktane-keypad.png" 
            display_description.innerText = 'Click all four keypad symbols that you can see. Then the page will show you what order to click them in game to complete the module'
            page_link.setAttribute('href', "../KTANE-Keypad/KTANE-keypad.html")
            break
        case "simon-says":
            display_img.src = "../imgs/ktane-simon-says.png" 
            display_description.innerText = 'Select whether the serial code has a vowel and how many strikes you have. Then click the colours that'+
            'flash and submit them. The page will then display the colours you need to click in response.'
            page_link.setAttribute('href', "../KTANE-Simon-Says/KTANE-simon-says.html")
            break
        case "who's on first":
            display_img.src = "../imgs/ktane-whos-on-first.png" 
            display_description.innerText = 'First press which label is on the screen of the module. Then press the label of the button'+
            'that the first section told you to loook at. Finally read of the list possible labels that appears on the right side of the'+
            'screen top to bottom starting with the left side.'
            page_link.setAttribute('href', "../KTANE-Who-is-first/KTANE-who-is-first.html")
            break
        case "memory":
            display_img.src = "../imgs/ktane-memory.png"
            display_description.innerText = 'Select the number on the left that has appeared on the screen. Then use the arrows to select'+
            'the number that is in the postion you have told to the other player. and click the number to submit it.'
            page_link.setAttribute('href', "../KTANE-Memory/KTANE-memory.html")
            break
        case "morse-code":
            display_img.src = "../imgs/ktane-morse-code.png" 
            display_description.innerText = ''
            page_link.setAttribute('href', "../KTANE-Morse_Code/KTANE-morse-code.html")
            break
        case "complicated-wires":
            display_img.src = "../imgs/ktane-complicated-wires.png"
            display_description.innerText = 'Enter in the number of batteries, if theres a parrallel port and if the serial number ends in'+
            'an even number. Then select all the lights lit, the colour of the wires and the stars shown. Then submit the page to be shown'+
            'the wires that need to be cut. If there is no wire choose the blank wire option after the red-blue wire.'
            page_link.setAttribute('href', "../KTANE-Complicated-Wires/KTANE-complicated-wires.html") 
            break
        case "wire-sequences":
            display_img.src = "../imgs/ktane-wire-sequences.png" 
            display_description.innerText = ''
            page_link.setAttribute('href', "../KTANE-Wire-Sequences/KTANE-wire-sequences.html")
            break
        case "mazes":
            display_img.src = "../imgs/ktane-button.png" 
            display_description.innerText = ''
            page_link.setAttribute('href', "")
            break
        case "passwords":
            display_img.src = "../imgs/ktane-button.png" 
            display_description.innerText = ''
            page_link.setAttribute('href', "")
            break
    }
}