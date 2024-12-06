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

var display_img = document.getElementById("current-ktane-helper-img")
var display_description = document.getElementById("current-ktane-helper-description")
var page_link = document.getElementById("page-link")

button_1.onclick = () => change_current_helper_display("wires", display_img, display_description);
button_2.onclick = () => change_current_helper_display("buttons", display_img, display_description);
button_3.onclick = () => change_current_helper_display("keypads", display_img, display_description);
button_4.onclick = () => change_current_helper_display("simon-says", display_img, display_description);
button_5.onclick = () => change_current_helper_display("who's on first", display_img, display_description);
button_6.onclick = () => change_current_helper_display("morse-code", display_img, display_description);
button_7.onclick = () => change_current_helper_display("complicated-wires", display_img, display_description);
button_8.onclick = () => change_current_helper_display("wire-sequences", display_img, display_description);
button_9.onclick = () => change_current_helper_display("mazes", display_img, display_description);
button_10.onclick = () => change_current_helper_display("passwords", display_img, display_description);


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
        case "simons-says":
            display_img.src = "../imgs/ktane-simon-says.png" 
            display_description.innerText = ''
            page_link.setAttribute('href', "")
            break
        case "who's on first":
            display_img.src = "../imgs/ktane-whos-on-first.png" 
            display_description.innerText = ''
            page_link.setAttribute('href', "")
            break
        case "morse-code":
            display_img.src = "../imgs/ktane-button.png" 
            display_description.innerText = ''
            page_link.setAttribute('href', "")
            break
        case "complicated-wires":
            display_img.src = "../imgs/ktane-complicated-wires.png"
            display_description.innerText = ''
            page_link.setAttribute('href', "") 
            break
        case "wire-sequences":
            display_img.src = "../imgs/ktane-wire-sequences.png" 
            display_description.innerText = ''
            page_link.setAttribute('href', "")
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