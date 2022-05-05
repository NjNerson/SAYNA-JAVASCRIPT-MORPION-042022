let grid = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8', 'item9'];
let arr1 = [];
let arr2 = [];
let arr3 = [];
let arr4 = [];
let arr5 = [];
let arr6 = [];
let arr7 = [];
let arr8 = [];
let success;
let gameOver = false;
let arr = [];
let clicked = 0;
let choice = 9;
let playerScore = 0;
let cpuScore = 0;
let player = {
    name: 'Player 1',
    team: '',
    arr: []
};
let cpu = {
    name: 'Computer',
    team: '',
    arr: []
};

document.getElementsById('reset').disabled = false;

$('.cpu-score').html(cpuScore);
$('.you-score').html(playerScore);

function findElement(check) {
    arr1 = ['item1', 'item2', 'item3'];
    arr2 = ['item4', 'item5', 'item6'];
    arr3 = ['item7', 'item8', 'item9'];
    arr4 = ['item1', 'item4', 'item7'];
    arr5 = ['item2', 'item5', 'item8'];
    arr6 = ['item3', 'item6', 'item9'];
    arr7 = ['item1', 'item5', 'item9'];
    arr8 = ['item3', 'item5', 'item7'];

    success;

    switch (true) {
        case success = arr1.every(function(val) {
            return check.arr.indexOf(val) !== -1;
        }):
            gameOver = true;
            winning(arr1);
            setTimeout(on, 700, check.name);
            break;

        case success = arr2.every(function(val) {
            return check.arr.indexOf(val) !== -1;
        }):
            gameOver = true;
            winning(arr2);
            setTimeout(on, 700, check.name);
            break;

        case success = arr3.every(function(val) {
            return check.arr.indexOf(val) !== -1;
        }):
            gameOver = true;
            winning(arr3);
            setTimeout(on, 700, check.name);
            break;

        case success = arr4.every(function(val) {
            return check.arr.indexOf(val) !== -1;
        }):
            gameOver = true;
            winning(arr4);
            setTimeout(on, 700, check.name);
            break;

        case success = arr5.every(function(val) {
            return check.arr.indexOf(val) !== -1;
        }):
            gameOver = true;
            winning(arr5);
            setTimeout(on, 700, check.name);
            break;

        case success = arr6.every(function(val) {
            return check.arr.indexOf(val) !== -1;
        }):
            gameOver = true;
            winning(arr6);
            setTimeout(on, 700, check.name);
            break;

        case success = arr7.every(function(val) {
            return check.arr.indexOf(val) !== -1;
        }):
            gameOver = true;
            winning(arr7);
            setTimeout(on, 700, check.name);
            break;

        case success = arr8.every(function(val) {
            return check.arr.indexOf(val) !== -1;
        }):
            gameOver = true;
            winning(arr8);
            setTimeout(on, 700, check.name);
            break;

        case success = arr1.every(function(val) {
            return check.arr.indexOf(val) !== -1;
        }):
            gameOver = true;
            winning(arr1);
            setTimeout(on, 700, check.name);
            break;
    }
}

function choiseCase(clicked_id) {
    //attendre le tour du joueur pour pouvoir cliquer
    if (clicked % 2 == 0) {
        $('#' + clicked_id).html('<p class = "animated bounceInUp" style= "font-size:2em;color:#4286f4;" >' + player.team + ' </p>');
        grid.splice(grid.indexOf(clicked_id), 1);
        player.arr.push(clicked_id);
        findElement(player);
        finished();
        $('.player-turn').css({ "border-bottom": "none" })
        $('.cpu-turn').css({ "border-bottom": "3px solid #e29120" })
        $('#' + clicked_id).prop("disabled", true);
        setTimeout(computer, 1300);
    }

    choice -= 1;
    clicked++;
}

function computer() {
    var ran = Math.floor(Math.random() * choice);
    var res = grid[ran];
    $('#' + res).html('<p class ="animated bounceIn" style="font-size:2em;color:#e29126;">' + cpu.team + '</p>')
    cpu.arr.push(grid[ran]);
    grid.splice(grid.indexOf(res), 1);
    findElement(cpu);
    finished();
    $('#' + res).prop("disabled", true);
    $('.player-turn').css({ "border-bottom": "3px solid #4286f4" })
    $('.cpu-turn').css({ "border-bottom": "none" })

    choice -= 1;
    clicked++;
}

function reset() {

    $('.grid-item').empty();

    player.arr = [];
    cpu.arr = [];
    grid = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8', 'item9'];
    for (i = 0; i < 9; i++) {
        document.getElementById(grid[i]).disabled = false;

    }
    choice = 9;
    gameOver = false;
    cpuScore = 0;
    playerScore = 0;

    $('.cpu-score').html(cpuScore);
    $('.you-score').html(playerScore);


}

function winning(valeur) {

    if (clicked % 2 == 0) {


        $('.layer2').show();
        playerScore++;
        $('.you-score').html(playerScore);
    } else {
        $(".layer2").show();

        cpuScore++;
        $('.cpu-score').html(cpuScore);
    }
    grid = [];
    choice = 9
    player.arr = [];
    cpu.arr = [];
}

function choixEquipe(clicked_id) {

    $('.layer').fadeOut(400);
    player.team = document.getElementById(clicked_id).innerHTML
    if (player.team === 'X') {
        cpu.team = 'O';
    } else {
        cpu.team = 'X';
    }
    grid = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8', 'item9'];
    for (i = 0; i < 9; i++) {
        document.getElementById(grid[i]).disabled = false;

    }

}

function winnershow() {
    $('.layer2').fadeOut(400);
    $('.grid-item').empty();
    player.arr = [];
    cpu.arr = [];
    grid = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8', 'item9'];
    for (i = 0; i < 9; i++) {
        document.getElementById(grid[i]).disabled = false;

    }
    choice = 9;
    clicked = 0;
    gameOver = false;

}

function matchnul() {
    $('.layer3').css({ "display ": "none" })
    $('.layer3').fadeOut(400);
    $('.grid-item').empty();
    player.arr = [];
    cpu.arr = [];

    //vider les cases buttons
    grid = ['item1', 'item2', 'item3', 'item4', 'item5', 'item6', 'item7', 'item8', 'item9'];
    for (i = 0; i < 9; i++) {
        document.getElementById(grid[i]).disabled = false;

    }
    choice = 9;
    gameOver = false;

}


function on(val) {
    $(".winner-name").html(val + ' a gagné!');

    $('.layer2').show();

}

function finished() {
    if (choice === 0 && gameOver === false) {
        on3();
    }
}

function on3() {
    $('.layer3').css({ "display ": "block" });
    $('.layer3').show();
}