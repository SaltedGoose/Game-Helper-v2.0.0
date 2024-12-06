var live_button = document.getElementById("live");
var blank_button = document.getElementById("blank");
var submit_shell_lineup_button = document.getElementById("submit-shell-lineup");
var submit_known_shells_button = document.getElementById("submit-known-shells")

var num_of_lives = 0;
var num_of_blanks = 0;
var live_prob = 0;
var blank_prob = 0;
var shell_lineup = [];

var num_of_shots = 0

live_button.onclick = on_live_click;
blank_button.onclick = on_blank_click;
submit_shell_lineup_button.onclick = on_sumbit_shell_lineup;
submit_known_shells_button.onclick = on_known_shells;

function calculate_probability(num_of_blanks, num_of_lives){
    blank_prob = num_of_blanks/(num_of_blanks+num_of_lives) * 100;
    live_prob = 100 - blank_prob;

    var liveProbLabel = document.getElementById("live-prob-label");
    liveProbLabel.innerHTML = `<strong>Live Probability: ${Math.round(live_prob)}%</strong>`;

    var blankProbLabel = document.getElementById("blank-prob-label");
    blankProbLabel.innerHTML = `<strong>Blank Probability: ${Math.round(blank_prob)}%</strong>`;
}

function display_shell_lineup(shell){
    var shellLineupDisplay = document.getElementById("display-shell-lineup")
    shellLineupDisplay.innerHTML = `<strong>[${shell_lineup}]</strong>`
}

function check_known_shells(num_of_shots){
    if(shell_lineup[num_of_shots] == "L"){
        var liveProbLabel = document.getElementById("live-prob-label");
        liveProbLabel.innerHTML = `<strong>Live Probability: 100%</strong>`;
    
        var blankProbLabel = document.getElementById("blank-prob-label");
        blankProbLabel.innerHTML = `<strong>Blank Probability: 0%</strong>`;
    }
    else if(shell_lineup[num_of_shots] == 'B'){
        var liveProbLabel = document.getElementById("live-prob-label");
        liveProbLabel.innerHTML = `<strong>Live Probability: 0%</strong>`;
    
        var blankProbLabel = document.getElementById("blank-prob-label");
        blankProbLabel.innerHTML = `<strong>Blank Probability: 100%</strong>`;
    }
}

function on_sumbit_shell_lineup(){
    shell_lineup = [];
    num_of_shots = 0;
    document.getElementById("known-shells").value = ''

    var lineup = document.getElementById("blank-live");
    var lineup_value = lineup.value;
    var blankLives = lineup_value.split(",");

    num_of_lives = parseInt(blankLives[1]);
    num_of_blanks = parseInt(blankLives[0]);
    
    
    var liveLabel = document.getElementById("remaining-lives");
    liveLabel.innerHTML = `<strong>Number of Lives: ${num_of_lives}</strong>`
    var blankLabel = document.getElementById("remaining-blanks");
    blankLabel.innerHTML = `<strong>Number of Blanks: ${num_of_blanks}</strong>`
    
    calculate_probability(num_of_blanks, num_of_lives)

    for (var x = 0; x < (num_of_lives + num_of_blanks); x++) {
        shell_lineup.push(" ?")
    }

    display_shell_lineup()
}

function on_known_shells(){
    var known_shells = document.getElementById("known-shells").value.split(",")
    for (var x = 0; x < known_shells.length; x++){
        shell_lineup[known_shells[x][0] - 1] = known_shells[x][1]
    }
    var shellLineupDisplay = document.getElementById("display-shell-lineup")
    shellLineupDisplay.innerHTML = `<strong>[${shell_lineup}]</strong>`

}

function on_live_click(){
    if (num_of_lives > 0){
        if(shell_lineup[num_of_shots] == 'L' || shell_lineup[num_of_shots] == ' ?'){
            num_of_lives = num_of_lives - 1;
            var liveLabel = document.getElementById("remaining-lives");
            liveLabel.innerHTML = `<strong>Number of Lives: ${num_of_lives}</strong>`;
            calculate_probability(num_of_blanks, num_of_lives)
            shell_lineup[num_of_shots] = 'L'
            display_shell_lineup()
            num_of_shots++
        }
    }
    check_known_shells(num_of_shots)
}

function on_blank_click(){
    if (num_of_blanks > 0){
        if(shell_lineup[num_of_shots] == 'B' || shell_lineup[num_of_shots] == ' ?'){
            num_of_blanks = num_of_blanks - 1;
            var blankLabel = document.getElementById("remaining-blanks");
            blankLabel.innerHTML = `<strong>Number of Blanks: ${num_of_blanks}<strong>`;
            calculate_probability(num_of_blanks, num_of_lives)
            shell_lineup[num_of_shots] = 'B'
            display_shell_lineup()
            num_of_shots++
        }
    }
    check_known_shells(num_of_shots)
}